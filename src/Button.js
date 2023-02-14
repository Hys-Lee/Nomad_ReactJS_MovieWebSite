import PropTypes from "prop-types";
import styles from "./Button.module.css"

function Button({text, onClick}){

    return(
        <button className={styles.btn}
        onClick = {onClick}
        >{text}</button>
        /// global css파일로 안에 다 합쳐서 index에 하나만 import하는게 아니라
        /// module별로 css파일을 적용시킬 수 있다는 장점이 생김.
        ///  react-create-app을 통해.

        /// (적절한 이름).module.css 로 이름을 설정하고
        ///  필요한 module에서 import하면 됨.
        /// 이렇게 안하고 모듈로한다면 html안에서 style로 붙여야 하는데 에바자너
        /// class로 추가하는 방식임
        
        ///  크롬에서 개발자도구로 보면 class이름은 react-create-app에서
        /// 랜덤으로 설정해준다는 것을 알 수 있음.(다른 애들이랑 안겹치게)
        ///   -> 즉, 여러 module에서 같은 class이름을 써도 다르게 인식된다는 것.
    );
}
//// create-react-app 을 사용하면 우리가 react에서 흔히 쓰는
// 다양한 것들에 자동완성이 지원 됨.
//  또한 nodejs를 함께 써서 여러 파일로 관리할수도 있음.
// 
Button.propTypes={
    text:PropTypes.string.isRequired,
}

export default Button;    /// 모듈형으로 만들기 위한 방법.