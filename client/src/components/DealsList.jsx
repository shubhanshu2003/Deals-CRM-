import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';
import moment from 'moment';

// Maps deal stages to Material-UI Chip color variants for visual distinction
const getStageColor = (stage) => {
    switch (stage) {
        case 'New':
            return 'primary';
        case 'In_Progress':
            return 'info';
        case 'Won':
            return 'success';
        case 'Lost':
            return 'error';
        default:
            return 'default';
    }
};

// Formats stage string to replace underscores with spaces for better readability
const formatStageName = (stage) => stage.replace('_', ' ');

const DealsList = ({ deals }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Deal Name</TableCell>
                        <TableCell>Contact Name</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Stage</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Close Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {deals.map((deal) => (
                        <TableRow key={deal.id}>
                            <TableCell>{deal.name}</TableCell>
                            <TableCell>{deal.contactName}</TableCell>
                            <TableCell>{deal.company}</TableCell>
                            <TableCell>
                                {/* Show the stage label with an appropriate color */}
                                <Chip
                                    label={formatStageName(deal.stage)}
                                    color={getStageColor(deal.stage)}
                                    size="small"
                                />
                            </TableCell>
                            {/* Format deal value as currency */}
                            <TableCell>{`$${parseFloat(deal.value).toFixed(2)}`}</TableCell>
                            {/* Format close date if present, else show 'N/A' */}
                            <TableCell>
                                {deal.closeDate ? moment(deal.closeDate).format('YYYY-MM-DD') : 'N/A'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DealsList;
