import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import InsertPatientDataModal from "./InsertPatientDataModal";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  overflowY: "scroll",
  boxShadow: 24,
  maxHeight: "90%",
  p: 4,
};

export default function ChooseInsertPatientDataModal() {
  const [modal1, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let choosen = [];
  const handleChange = event => {
    if (event.target.checked) {
      choosen.push(event.target.value);
    } else {
      let index = choosen.indexOf(event.target.value);
      choosen.splice(index, 1);
    };
  };

  const values = [
    {
      "choose": [
        {
          value: 'Iarterial_pressure',
          label: 'Arterial Pressure',
          disabled: true,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Iascultation',
          label: 'Ascultation',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Ibowel',
          label: 'Bowel',
          disabled: true,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Idiuresis_vol_24h',
          label: 'Diuresis vol 24h',
          disabled: true,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Idiuresis',
          label: 'Diuresis',
          disabled: true,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Iheart_rate',
          label: 'Heart Rate',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Ihgt',
          label: 'Hgt',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Irespiration_rate',
          label: 'Respiration Rate',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Isaturation',
          label: 'Saturation',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Itemperature',
          label: 'Temperature',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Iweight',
          label: 'Weight',
          disabled: true,
          required: false,
          defaultChecked: false
        },
      ]
    },
  ];
  return (
    <div>
      <IconButton onClick={handleOpen}
        variant="outlined"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 10 }}
      >
        <AddIcon color="#fff" />
      </IconButton>
      <Modal
        open={modal1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        target="choose"
      >
        <Box sx={style}>
          <Box component="span"
            display="flex"
            sx={{ alignItems: "center", width: 1 }}>
            <Typography variant="h6" component="h2" display="inline" sx={{ width: 0.8 }}>Choose: </Typography>
            <Typography variant="body1" align="right" display="inline" sx={{ width: 0.3 }}>
              <IconButton onClick={handleClose}
                color="primary" aria-label="insert" size="large"
                sx={{}}
              >
                <CloseIcon color="#fff" />
              </IconButton>
            </Typography>
          </Box>
          <FormGroup>
            {values[0].choose.map((data) => {
              return <FormControlLabel control={<Checkbox defaultChecked={data.required} />} key={data.label} label={data.label} value={data.value} disabled={data.disabled} required={data.required} onChange={handleChange} />
            })}
          </FormGroup>
          <InsertPatientDataModal chooseDef={choosen} />
        </Box>
      </Modal>
    </div >
  );
}