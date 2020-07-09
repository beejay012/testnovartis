import * as React from 'react';
import {
  Chart,
  PieSeries,
  AreaSeries,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { Box, Paper } from '@material-ui/core';

const data = [
  { effects: 'Death', val: 17 },
  { effects: 'Disabling', val: 4 },
  { effects: 'Life Threatning', val: 5 },
  { effects: 'Hospitalization', val: 40 },
  { effects: 'Others', val: 59 },
];


export default class Demo extends React.PureComponent<{}, {data : any}> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
    <div>
    <h1> Drug Adverse Events by Type of Seriousness</h1>
    <Box display="flex" flexDirection="row">
    <Box alignContent="start" height="25%" width="25%">
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="effects"
            innerRadius={0.6}
          />
          <Animation />
          <AreaSeries
            name="Android"
            valueField="effects"
            argumentField="year"
          />
          <AreaSeries
            name="iOS"
            valueField="effects"
            argumentField="year"
          />
        </Chart>
      </Box>
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="line"
            valueField="lineValue"
            argumentField="argument"
          />
          <SplineSeries
            name="spline"
            valueField="splineValue"
            argumentField="argument"
          />
        </Chart>
      </Paper>
      </Box>
      </div>
    );

  }
}
