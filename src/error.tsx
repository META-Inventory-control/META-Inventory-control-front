import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{display: "flex", justifyContent: "center", marginTop: "300px"}}>
        <div>
            <h1 style={{color: "white"}}>Oops!</h1>
            <p style={{color: "white"}}>Sorry, an unexpected error has occurred.</p>
            <p style={{color: "white"}}>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    </div>
  );
}