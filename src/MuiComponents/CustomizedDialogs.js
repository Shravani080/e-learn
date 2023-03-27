import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';
import SignatureCanvas from 'react-signature-canvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature, faEraser } from '@fortawesome/free-solid-svg-icons'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2)
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1)
    }
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 3 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 19,
                        color: (theme) => theme.palette.grey[500]
                    }}
                    >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{
                    color: "white",
                    backgroundColor: "#019bde",
                    "&:hover": {
                        backgroundColor: "#019bde"
                    }
                }}
            >
                SIGN & ACCEPT CONTRACT
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    Sign & Accept Contract
                </BootstrapDialogTitle>
                <DialogContent>

                    <FontAwesomeIcon icon={faFileSignature} style={{ color: "#6f6f6f" }} />
                    signature

                </DialogContent>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <SignatureCanvas penColor='black'
                            canvasProps={{ width: 400, height: 200, className: 'sigCanvas' }} />
                        <span>please sign above</span>
                        <FontAwesomeIcon icon={faEraser} style={{ color: "#666666", }} />
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Checkbox
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <span>
                        <b>I,Gerald Alexander</b> reviewed the Contract in detail and I digitally
                        sign to accept this Contract.
                    </span>
                </DialogActions>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={handleClose}
                        sx={{
                            color: "white",
                            backgroundColor: 'rgb(102 102 102)',
                            "&:hover": {
                                backgroundColor: 'rgb(102 102 102)'
                            }
                        }}
                    >
                        cancel
                    </Button>
                    <Button autoFocus
                        onClick={handleClose}
                        sx={{
                            color: "white",
                            backgroundColor: "rgb(129 205 238)",
                            "&:hover": {
                                backgroundColor: "rgb(129 205 238)"
                            }
                        }}
                    >
                        Accept
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}