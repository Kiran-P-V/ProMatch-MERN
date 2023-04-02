import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./ExpertTable";
import apiCalls from "../../EndPoints/Apicalls";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import PersonOffRoundedIcon from "@mui/icons-material/PersonOffRounded";
import ExpertApiCalls from "../../EndPoints/ExpertApiCalls";
export default function DataTable() {
  console.log("admin component working");
  React.useEffect(() => {
    fetchExpertDatas();
    console.log("useEffect worked ");
  }, []);
  const [expertData, setExpertData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedExpert, setSelectedExpert] = React.useState(null);

  const fetchExpertDatas = async () => {
    const response = await apiCalls.fetchExpertData();
    if (response) {
      console.log(response, "response clg at the table component");
      setExpertData(response);
    }
  };

  const handleClickOpen = (expert) => {
    setSelectedExpert(expert);
    setOpen(true);
    console.log(selectedExpert, "here is the selected expert");
  };

  const handleClose = () => {
    setSelectedExpert(null);
    setOpen(false);
  };

  const handleApproveAdmin = async (expertId) => {
    console.log(expertId);
    const response = await ExpertApiCalls.expertApprove(expertId);
  };

  const rows = expertData.map((expert) => ({
    id: expert._id,
    lastName: expert.lastName,
    firstName: expert.firstName,
    fullName: `${expert.firstName || ""} ${expert.lastName || ""}`,
    email: expert.email,
    city: expert.city,
    phoneNumber: expert.phoneNumber,
    idProof: expert.idProof,
  }));

  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    {
      field: "fullName",
      headerName: "Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    { field: "email", headerName: "Email", width: 250 },
    { field: "city", headerName: "City", width: 250 },
    {
      field: "actions",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => (
        <Button onClick={() => handleClickOpen(params.row)}>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        color: "white",
      }}
    >
      <DataGrid
        sx={{ color: "white", width: "100%" }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      {selectedExpert && (
        <Dialog
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(2px)",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.3)",
            borderRadius: "12px",
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle
            sx={{
              backgroundColor: "#00001a",
              //   border: "1px solid #ccc",
              //   borderWidth: "0.1px",
              color: "white",
            }}
            id="scroll-dialog-title"
          >
            Details
            <Button
              sx={{ marginLeft: 20 }}
              startIcon={<CloseRoundedIcon sx={{ color: "red" }} />}
              onClick={handleClose}
            />
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px",
              color: "white",
              backgroundColor: "#00001a",
              //   border: "1px solid lightgrey",
            }}
          >
            <p sx={{ margin: "8px 0", fontSize: "16px" }}>
              ID: {selectedExpert.id}
            </p>
            <p sx={{ margin: "8px 0", fontSize: "16px" }}>
              First Name: {selectedExpert.firstName}
            </p>
            <p sx={{ margin: "8px 0", fontSize: "16px" }}>
              Last Name: {selectedExpert.lastName}
            </p>
            <p sx={{ margin: "8px 0", fontSize: "16px" }}>
              Email: {selectedExpert.email}
            </p>
            <p sx={{ margin: "8px 0", fontSize: "16px" }}>
              City: {selectedExpert.city}
            </p>
            <p sx={{ margin: "8px 0", fontSize: "16px" }}>
              Phone: {selectedExpert.phoneNumber}
            </p>
            <img
              src={selectedExpert.idProof.url}
              alt="Uploaded image"
              style={{
                width: "300px",
                height: "250px",
                border: "1px solid lightgrey",
                margin: "16px 0",
              }}
            />
          </DialogContent>
          <DialogActions
            sx={{
              backgroundColor: "#00001a",
              //   border: "1px solid lightgrey",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Button
              sx={{ color: "red" }}
              endIcon={<PersonOffRoundedIcon sx={{ color: "red" }} />}
            >
              Reject
            </Button>
            <Button
              onClick={handleApproveAdmin(selectedExpert.id)}
              endIcon={<HowToRegRoundedIcon />}
            >
              Approve
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
