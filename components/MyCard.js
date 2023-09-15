import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import _ from 'lodash';

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export default function MyCard(props) {
    const colors = ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6',
                    '#dd4477', '#66aa00', '#b82e2e', '#316395', '#3366cc', '#994499'
                    ];

    const handleChange = (event) => {
        // event.preventDefault();
        setReg(event.target.value);
        props.alerting(event.target.value);
    };
    
    const regions = props.regions;
    const region = props.region;
    const groupedByParty = _.groupBy(props.candidates, 'party_name');
    const data = [];

    let x = 0;
    for (const property in groupedByParty) {
        let obj = {
            name: property,
            color: colors[x]
        }
        groupedByParty[property].forEach(i => {
            obj[i.candidate_counter] = i.total_valid;
            obj['color_' + i.candidate_counter] = colors[x];
        });
        data.push(obj);
        x++;
    }

    const [reg, setReg] = React.useState(region.id)

    const renderBarChart = (
        <BarChart
          width={1400}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <Tooltip />
            <Bar yAxisId="left" dataKey="1" fill={colors[1]} />
            <Bar yAxisId="left" dataKey="2" fill={colors[2]} />
            <Bar yAxisId="left" dataKey="3" fill={colors[3]} />
            <Bar yAxisId="left" dataKey="4" fill={colors[4]} />
            <Bar yAxisId="left" dataKey="5" fill={colors[5]} />
            <Bar yAxisId="left" dataKey="6" fill={colors[6]} />
        </BarChart>
    );

    return (
        <Card>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Grafik Perolehan Suara Dapil I
            </Typography>
            <Typography variant="h5" component="div">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={reg}
                    onChange={handleChange}
                >
                    {
                        regions.map(re => {
                            return <MenuItem key={re.id} value={re.id}>{re.name}</MenuItem>
                        })
                    }
                </Select>
            </Typography>
            <Typography variant="body2">
                { renderBarChart }
            </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}