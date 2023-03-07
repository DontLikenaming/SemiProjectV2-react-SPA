const Join = () => {
    return (
        <div>
            <h3>회원가입</h3>
            <form name="jnfrm">
                <div>
                    <label htmlFor="userid">아이디</label>
                    <input type="text" id="userid" name="userid"></input>
                </div>
                <div>
                    <label htmlFor="passwd">비밀번호</label>
                    <input type="password" id="passwd" name="passwd"></input>
                </div>
                <div>
                    <label htmlFor="check">비밀번호 확인</label>
                    <input type="password" id="check" name="check"></input>
                </div>
                <div>
                    <label htmlFor="name">이름</label>
                    <input type="text" id="name" name="name"></input>
                </div>
                <div>
                    <label htmlFor="email">이메일</label>
                    <input type="text" id="email" name="email"></input>
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