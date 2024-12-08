import mongoose from 'mongoose';

import { hashPassword } from '../utils/commons/passsordHash.js';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: function () {
        return true;
      },
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: function () {
        return this.signedUpVia === 'email';
      }
    },
    signedUpVia: {
      type: String,
      enum: ['email', 'google', 'facebook'],
      required: true,
      default: 'email'
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next();
  this.password = await hashPassword(this.password);
  next();
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
