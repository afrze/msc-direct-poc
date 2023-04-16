import Header from '../Header';

type Props = {
  children?: JSX.Element | string;
}

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout