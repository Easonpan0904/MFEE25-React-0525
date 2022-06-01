import Child from './Child';

function Parent() {
  return (
    <>
      <Child />
      <Child text="" fullName="Amy"></Child>
      <Child />
    </>
  );
}

export default Parent;
