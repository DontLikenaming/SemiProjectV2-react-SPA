const Login = () => {
    return (
        <div>
            <form name="logfrm">
                <div>
                    <label htmlFor="userid">아이디</label>
                    <input type="text" id="userid" name="userid"></input>
                </div>
                <div>
                    <label htmlFor="passwd">비밀번호</label>
                    <input type="password" id="passwd" name="passwd"></input>
                </div>
                <div><label></label>
                    <button type="button" id="loginbtn" name="loginbtn">로그인</button>
                </div>
            </form>
        </div>
    );
}

export default Login;