import { motion } from 'framer-motion';
import { Paper, Typography, FormControl, InputLabel, Select, MenuItem, Box, TextField, Grid, Button } from '@mui/material';

const stages = ['New', 'In Progress', 'Won', 'Lost'];

// Define default filter values used for resetting
const defaultLocalFilters = {
  stage: '',
  min: '',
  max: '',
};

const FilterPanel = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  const handleReset = () => {
    // Reset to default filter values
    onFilterChange(defaultLocalFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ width: '100%' }}
    >
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Advanced Filters
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Deal Stage</InputLabel>
            <Select
              label="Deal Stage"
              name="stage"
              value={filters.stage}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {stages.map((stage) => (
                <MenuItem key={stage} value={stage.replace(' ', '_')}>
                  {stage}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography variant="subtitle1" gutterBottom sx={{ mt: 3, mb: 1 }}>
            Value Range
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Min"
                name="min"
                type="number"
                value={filters.min}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Max"
                name="max"
                type="number"
                value={filters.max}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          {/* Reset Button */}
          <Box sx={{ mt: 3, textAlign: 'right' }}>
            <Button variant="outlined" color="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default FilterPanel;
