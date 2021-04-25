/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button } from "@material-ui/core";

export default function SelectSingleNode({ options }) {
  return (
    <div>
      <Autocomplete
        id="grouped-demo"
        options={options.sort((a, b) => -b.type.localeCompare(a.type))}
        groupBy={option => option.type}
        getOptionLabel={option => option.s_name}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="选择节点" variant="outlined" />
        )}
      />
      <Button>确认选择</Button>
    </div>
  );
}
