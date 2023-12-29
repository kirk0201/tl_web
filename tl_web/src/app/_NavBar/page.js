import Link from 'next/link';

export default function NavBar({ pageInfo }) {
    console.log(pageInfo);
    
    return (
      <Link href={pageInfo.endPoint}>{pageInfo.name}</Link>
    )
}