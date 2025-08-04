import { TextField, InputAdornment, IconButton, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const SearchBar = ({ q, onSearchChange, onToggleFilters, filterPanelOpen }) => {
    return (
        <Box sx={{ display: 'flex', gap: 3 }}>
            <TextField
                fullWidth
                label="Search Deals"
                variant="outlined"
                value={q}
                onChange={(e) => onSearchChange(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <Button
                variant={filterPanelOpen ? 'outlined' : 'contained'}
                onClick={onToggleFilters}
                startIcon={<FilterListIcon />}

            >
                
                Filters
            </Button>
        </Box>
    );
};

export default SearchBar;