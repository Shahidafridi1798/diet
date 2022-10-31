import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="b">
      <div className="h">
        <Typography>
          <h1 className="header">
            Welcome to the World of Diet Suggestions App.
          </h1>
          <h2>
            Our Food should be our medicine and our medicine should be our food.
          </h2>
          <img
            height={"400px"}
            width="50%"
            src="https://images.everydayhealth.com/images/what-is-the-dash-diet-1440x810.jpg"
            alt="diet"
          />
        </Typography>
        <footer>
          <h1>Get fit in the gym, get Suggestions to eat healthy here! :)</h1>
        </footer>
      </div>
      All the best for the journey to get fit!!
    </div>
  );
}
