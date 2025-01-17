import type { NextPage } from 'next'
import Link from 'next/link'
import WalletLoader from 'components/WalletLoader'
import PageLink from 'components/PageLink'
import { useSigningClient } from 'contexts/cosmwasm'
import { LibraryIcon, MapIcon, PencilIcon } from '@heroicons/react/solid'

const Home: NextPage = () => {
  const { walletAddress } = useSigningClient()

  return (
    <WalletLoader>
      <h1 className="text-6xl font-bold">
        {process.env.NEXT_PUBLIC_SITE_TITLE}
      </h1>
      <p className="italic">Decentralized Name Service</p>

      <PageLink
        href="/tokens/register"
        title="Register"
        description="Register and configure a new username"
        Icon={LibraryIcon}
      />
      <PageLink
        href="/tokens/manage"
        title="Manage"
        description="Transfer, edit, or burn a name that you own"
        Icon={PencilIcon}
      />
      <PageLink
        href="/explore"
        title="Explore"
        description="Lookup addresses and explore registered names"
        Icon={MapIcon}
      />
    </WalletLoader>
  )
}

export default Home
