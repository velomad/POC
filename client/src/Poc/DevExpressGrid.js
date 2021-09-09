import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Plugin,
  Template,
  TemplateConnector,
  TemplatePlaceholder,
  Action,
} from "@devexpress/dx-react-core";
import { EditingState, RowDetailState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
} from "@devexpress/dx-react-grid-material-ui";
// eslint-disable-next-line
import moment from "moment";
import classNames from "clsx";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MuiGrid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Edit from "@material-ui/icons/Edit";
import Cancel from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import { employees, states } from "../demo-data/grid-data";

const getRowId = (row) => row.ID;

const DetailContent = ({ row, ...rest }) => {
  const { processValueChange, applyChanges, cancelChanges } = rest;
  return (
    <MuiGrid container spacing={3}>
      <MuiGrid item xs={6}>
        <FormGroup>
          <TextField
            margin="normal"
            name="Prefix"
            label="Title"
            value={row.Prefix}
            onChange={processValueChange}
          />
          <TextField
            margin="normal"
            name="LastName"
            label="Last Name"
            value={row.LastName}
            onChange={processValueChange}
          />
          <FormControl margin="normal">
            <InputLabel id="select-helper-label">State</InputLabel>
            <Select
              name="StateID"
              value={row.StateID}
              onChange={processValueChange}
              labelId="select-helper-label"
            >
              {states.map(({ ID, Name }) => (
                <MenuItem key={ID} value={ID}>
                  {Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormGroup>
      </MuiGrid>
      <MuiGrid item xs={6}>
        <FormGroup>
          <TextField
            margin="normal"
            name="FirstName"
            label="First Name"
            value={row.FirstName}
            onChange={processValueChange}
          />
          <TextField
            margin="normal"
            name="Position"
            label="Position"
            value={row.Position}
            onChange={processValueChange}
          />
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              label="Birth Date"
              margin="normal"
              value={row.BirthDate}
              onChange={(_, value) =>
                processValueChange({
                  target: { name: "BirthDate", value: value.toDate() },
                })
              }
              format="MM/DD/YYYY"
            />
          </MuiPickersUtilsProvider>
        </FormGroup>
      </MuiGrid>
      <MuiGrid item xs={12}>
        <FormGroup>
          <TextField
            margin="normal"
            name="Notes"
            label="Notes"
            multiline
            rowsMax={4}
            value={row.Notes}
            onChange={processValueChange}
          />
        </FormGroup>
      </MuiGrid>
      <MuiGrid item xs={12}>
        <MuiGrid container spacing={3} justify="flex-end">
          <MuiGrid item>
            <Button onClick={applyChanges} variant="text" color="primary">
              Save
            </Button>
          </MuiGrid>
          <MuiGrid item>
            <Button onClick={cancelChanges} color="secondary">
              Cancel
            </Button>
          </MuiGrid>
        </MuiGrid>
      </MuiGrid>
    </MuiGrid>
  );
};

const styles = (theme) => ({
  toggleCell: {
    textAlign: "center",
    textOverflow: "initial",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing(1),
  },
  toggleCellButton: {
    verticalAlign: "middle",
    display: "inline-block",
    padding: theme.spacing(1),
  },
});

const ToggleCellBase = ({
  style,
  expanded,
  classes,
  onToggle,
  tableColumn,
  tableRow,
  row,
  className,
  ...restProps
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onToggle();
  };
  return (
    <TableCell
      className={classNames(classes.toggleCell, className)}
      style={style}
      {...restProps}
    >
      <IconButton className={classes.toggleCellButton} onClick={handleClick}>
        {expanded ? <Cancel /> : <Edit />}
      </IconButton>
    </TableCell>
  );
};

const ToggleCell = withStyles(styles, { name: "ToggleCell" })(ToggleCellBase);

const DetailEditCell = () => (
  <Plugin name="detailEdit">
    <Action
      name="toggleDetailRowExpanded"
      action={(
        { rowId },
        { expandedDetailRowIds },
        { startEditRows, stopEditRows }
      ) => {
        const rowIds = [rowId];
        const isCollapsing = expandedDetailRowIds.indexOf(rowId) > -1;
        if (isCollapsing) {
          stopEditRows({ rowIds });
        } else {
          startEditRows({ rowIds });
        }
      }}
    />
    <Template
      name="tableCell"
      predicate={({ tableRow }) => tableRow.type === TableRowDetail.ROW_TYPE}
    >
      {(params) => (
        <TemplateConnector>
          {(
            { tableColumns, createRowChange, rowChanges },
            {
              changeRow,
              commitChangedRows,
              cancelChangedRows,
              toggleDetailRowExpanded,
            }
          ) => {
            if (tableColumns.indexOf(params.tableColumn) !== 0) {
              return null;
            }
            const {
              tableRow: { rowId },
            } = params;
            const row = { ...params.tableRow.row, ...rowChanges[rowId] };

            const processValueChange = ({ target: { name, value } }) => {
              const changeArgs = {
                rowId,
                change: createRowChange(row, value, name),
              };
              changeRow(changeArgs);
            };

            const applyChanges = () => {
              toggleDetailRowExpanded({ rowId });
              commitChangedRows({ rowIds: [rowId] });
            };
            const cancelChanges = () => {
              toggleDetailRowExpanded({ rowId });
              cancelChangedRows({ rowIds: [rowId] });
            };

            return (
              <TemplatePlaceholder
                params={{
                  ...params,
                  row,
                  tableRow: {
                    ...params.tableRow,
                    row,
                  },
                  changeRow,
                  processValueChange,
                  applyChanges,
                  cancelChanges,
                }}
              />
            );
          }}
        </TemplateConnector>
      )}
    </Template>
  </Plugin>
);

const DetailCell = ({
  children,
  changeRow,
  editingRowIds,
  addedRows,
  processValueChange,
  applyChanges,
  cancelChanges,
  ...restProps
}) => {
  const { row } = restProps;

  return (
    <TableRowDetail.Cell {...restProps}>
      {React.cloneElement(children, {
        row,
        changeRow,
        processValueChange,
        applyChanges,
        cancelChanges,
      })}
    </TableRowDetail.Cell>
  );
};

const DevExpressGrid = () => {
  const [columns] = useState([
    { name: "Prefix", title: "Title" },
    { name: "FirstName", title: "First Name" },
    { name: "LastName", title: "Last Name" },
    { name: "Position", title: "Position" },
  ]);
  const [rows, setRows] = useState(employees);

  const commitChanges = ({ changed }) => {
    const changedRows = rows.map((row) =>
      changed[row.ID] ? { ...row, ...changed[row.ID] } : row
    );
    setRows(changedRows);
  };

  return (
    <Paper>
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <RowDetailState defaultExpandedRowIds={[1]} />
        <EditingState
          defaultEditingRowIds={[1]}
          onCommitChanges={commitChanges}
        />
        <Table />
        <TableHeaderRow />
        <TableRowDetail
          contentComponent={DetailContent}
          cellComponent={DetailCell}
          toggleCellComponent={ToggleCell}
        />
        <DetailEditCell />
      </Grid>
    </Paper>
  );
};

export default DevExpressGrid;
