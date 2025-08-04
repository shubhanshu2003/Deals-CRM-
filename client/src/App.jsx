import { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Paper,
  Pagination,
} from '@mui/material';
import DealsList from './components/DealsList';
import FilterPanel from './components/FilterPanel';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

const defaultFilters = {
  q: '',
  stage: '',
  min: '',
  max: '',
  page: 1,
  limit: 5,
};

function App() {
  const [deals, setDeals] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalDeals, setTotalDeals] = useState(0);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);

  // Local state to control immediate search input value
  const [searchInput, setSearchInput] = useState(filters.q);

  // Ref to hold debounce timer
  const debounceTimeout = useRef(null);

  const fetchDeals = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams(filters).toString();
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/deals?${params}`
      );
      if (!response.ok) throw new Error('Failed to fetch deals');
      const data = await response.json();
      setDeals(data.deals);
      setTotalDeals(data.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, [filters]);

  // Use debounce to update filters.q after user stops typing for 300ms
  const handleSearchChange = (q) => {
    setSearchInput(q);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setFilters((prev) => ({ ...prev, q, page: 1 }));
    }, 300);
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters, page: 1 }));
  };

  const handlePageChange = (event, value) => {
    setFilters((prev) => ({ ...prev, page: value }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        overflow: 'visible',
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          bgcolor: 'background.default',
          boxShadow: 3,
          borderRadius: 0,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'visible',
        }}
      >
        <Container maxWidth={false} sx={{ px: 0, py: 0 }}>
          {/* Heading */}
          <Box sx={{ mb: 2 }}>
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography
                variant="h3"
                component="h1"
                align="center"
                sx={{ fontWeight: 700, color: 'primary.main' }}
              >
                Deals Overview
              </Typography>
            </Paper>
          </Box>

          {/* Filter Panel with animated height and opacity */}
          <AnimatePresence>
            {filterPanelOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{
                  overflow: 'hidden',
                  width: '100%',
                  marginBottom: 16,
                }}
              >
                <Paper elevation={2} sx={{ overflowY: 'auto', p: 2 }}>
                  <FilterPanel
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </Paper>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search Bar with debounced input */}
          <Box sx={{ mb: 2 }}>
            <Paper elevation={2} sx={{ p: 1 }}>
              <SearchBar
                q={searchInput} // controlled input state for immediate user feedback
                onSearchChange={handleSearchChange} // debounced change handler
                onToggleFilters={() => setFilterPanelOpen((v) => !v)}
                filterPanelOpen={filterPanelOpen}
              />
            </Paper>
          </Box>

          {/* Deals List */}
          <Box sx={{ mb: 2 }}>
            <Paper elevation={2} sx={{ p: 2 }}>
              {loading && (
                <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />
              )}
              {error && <Alert severity="error">{error}</Alert>}
              {!loading && !error && deals.length === 0 && (
                <Alert severity="info">No deals found.</Alert>
              )}
              {!loading && !error && deals.length > 0 && (
                <>
                  <DealsList deals={deals} />
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Pagination
                      count={Math.ceil(totalDeals / filters.limit)}
                      page={filters.page}
                      onChange={handlePageChange}
                      color="primary"
                    />
                  </Box>
                </>
              )}
            </Paper>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
