import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-80 h-[70%]">
          <div>
            <h2>Smart</h2>
            <span>connect now</span>
          </div>
          <form>
            <input
              type="text"
              name="user-email-input"
              id="user-email-input"
              placeholder="email"
            />
            <input
              type="password"
              name="user-password-input"
              id="user-password-input"
              placeholder="password"
            />
            <div>
              <Link>Forgot password ?</Link>
            </div>
            <div>
              <button type="button">Connect</button>
              <div>
                <span>Not connected yet ?</span>
                <Link>register here</Link>
              </div>
              <button type="button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
