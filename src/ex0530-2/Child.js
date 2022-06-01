import PropTypes from 'prop-types';

// function Child(props) {
//   // console.log(props);
//   // 先解構成變數在做使用，有效減少寫出 props.
//   const { text, fullName } = props;
//   return (
//     <>
//       <h1>
//         {text} ! {fullName} !
//       </h1>
//     </>
//   );
// }

// 進階解構
function Child({ text, fullName }) {
  // console.log(props);
  // 先解構成變數在做使用，有效減少寫出 props.
  // const { text, fullName } = props;
  return (
    <>
      <h1>
        {text} ! {fullName} !
      </h1>
    </>
  );
}

Child.defaultProps = {
  fullName: 'Eason',
  text: 'Hey',
};

Child.propTypes = {
  fullName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Child;
