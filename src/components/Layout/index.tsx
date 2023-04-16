import Header from '../Header';

type Props = {
  children?: JSX.Element | string;
}

const Layout = (props: Props) => {
  return (
    <div className='md:max-w-[1400px] md:mx-auto p-2'>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout