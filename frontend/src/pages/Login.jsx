import { useEffect } from "react";

function Login() {

  useEffect(() => {

    const script = document.createElement("script");

    script.src =
      "https://static-bundles.visme.co/forms/vismeforms-embed.js";

    script.async = true;

    document.body.appendChild(script);

  }, []);

  return (
    <div
      className="visme_d"
      data-title="New Client Registration Form Template"
      data-url="9kgrq77g-new-client-registration-form-template?fullPage=true"
      data-domain="forms"
      data-full-page="true"
      data-min-height="100vh"
      data-form-id="170171"
    >
    </div>
  );
}

export default Login;