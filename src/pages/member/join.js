const Join = () => {
    return (
        <div>
            <h2>회원가입</h2>
            <form name="jnfrm">
                <div>
                    <label htmlFor="userid">아이디 </label>
                    <input type="text" id="userid" name="userid" />
                </div>
                <div>
                    <label htmlFor="passwd">비밀번호 </label>
                    <input type="password" id="passwd" name="passwd" />
                </div>
                <div>
                    <label htmlFor="check">비밀번호 확인 </label>
                    <input type="password" id="check" name="check" />
                </div>
                <div>
                    <label htmlFor="name">이름 </label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">이메일 </label>
                    <input type="text" id="email" name="email" />
                </div>
                <div>
                    <label></label>
                    <button type="button" id="jnbtn" name="jnbtn">입력완료</button>
                    <button type="reset">다시입력</button>
                </div>
            </form>
        </div>
    );
}

export default Join;