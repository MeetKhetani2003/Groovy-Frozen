import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { useUsers } from '@/hooks/getUser';
import { useUser } from '@/zustand/apis/userState';

const Customers = () => {
  const { userData } = useUser();
  const { getAllUserData } = useUsers();
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState('username');
  const [orderDirection, setOrderDirection] = useState('asc');

  useEffect(() => {
    getAllUserData();
  }, []);

  useEffect(() => {
    if (Array.isArray(userData)) {
      // Add a new property 'purchasedProductsCount' to each user
      const enrichedData = userData.map((user) => {
        let purchasedProductsCount = user.cart.purchasedHistory.reduce(
          (total, history) =>
            total +
            history.order.reduce(
              (orderTotal, item) => orderTotal + item.quantity,
              0
            ),
          0
        );
        purchasedProductsCount = purchasedProductsCount - 1;

        return { ...user, purchasedProductsCount };
      });
      setFilteredData(enrichedData);
    } else {
      throw new Error('userData is not an array');
    }
  }, [userData]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = userData.filter(
      (user) =>
        user.username.toLowerCase().includes(query) ||
        user.mobileNumber.includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.address.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const handleSort = (column) => {
    const isAsc = orderBy === column && orderDirection === 'asc';
    setOrderDirection(isAsc ? 'desc' : 'asc');
    setOrderBy(column);

    const sortedData = [...filteredData].sort((a, b) => {
      if (isAsc) {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setFilteredData(sortedData);
  };

  return (
    <div>
      <h1>Customers</h1>

      {/* Search Filter */}
      <TextField
        label="Search Customers"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearch}
      />

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'username'}
                  direction={orderBy === 'username' ? orderDirection : 'asc'}
                  onClick={() => handleSort('username')}
                >
                  Username
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'mobileNumber'}
                  direction={
                    orderBy === 'mobileNumber' ? orderDirection : 'asc'
                  }
                  onClick={() => handleSort('mobileNumber')}
                >
                  Mobile No.
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'email'}
                  direction={orderBy === 'email' ? orderDirection : 'asc'}
                  onClick={() => handleSort('email')}
                >
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'address'}
                  direction={orderBy === 'address' ? orderDirection : 'asc'}
                  onClick={() => handleSort('address')}
                >
                  Address
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'purchasedProductsCount'}
                  direction={
                    orderBy === 'purchasedProductsCount'
                      ? orderDirection
                      : 'asc'
                  }
                  onClick={() => handleSort('purchasedProductsCount')}
                >
                  Purchased Products
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(filteredData) &&
              filteredData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.mobileNumber}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.purchasedProductsCount}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Customers;
