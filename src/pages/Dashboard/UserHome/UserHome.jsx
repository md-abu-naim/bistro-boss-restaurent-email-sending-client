import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome </span> 
                {
                    user?.displayName ? user?.displayName : "Back"
                }
            </h2>
            kich ekat
        </div>
    );
};

export default UserHome;