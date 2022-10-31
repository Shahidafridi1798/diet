import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function NotFoundPage() {

    const navigate = useNavigate();
    return (
      <div className="not">
     <Button className="nt"
        onClick={() => navigate(-1)}
        variant="contained" startIcon={<ArrowBackIosIcon />} >
        BACK
      </Button>
     </div>
    );
  }
  