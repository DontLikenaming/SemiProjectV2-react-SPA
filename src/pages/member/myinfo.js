import '../../css/myinfo.css';

const Myinfo = () => {
    return (
        <div>
            <h3>회원정보</h3>
            <table className="myinfo">
                <tr>
                    <td>아이디</td>
                    <td></td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td></td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td></td>
                </tr>
                <tr>
                    <td>가입일</td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
}

export default Myinfo;