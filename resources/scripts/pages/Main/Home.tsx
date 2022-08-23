import CTASection from '@/scripts/shared/Home/CTASection'
import Feature from '@/scripts/shared/Home/Feature'
import Hero from '@/scripts/shared/Home/Hero'
import ItemsGrid from '@/scripts/shared/Home/ItemsGrid'
import Statistics from '@/scripts/shared/Home/Statistics'
import React from 'react'

const Home = (props) => {
  const {heroItems, lastestItems ,categories_stats , clusters_stats , groups_stats ,items_stats} = props;
  //console.log(props);
  return (
    <>
      <Hero data={heroItems} />
      <Feature/>
      <ItemsGrid title="Lastest Items" data={lastestItems} pagination=""  />
      <CTASection />
      <Statistics title="last statistics" data={{categories_stats , clusters_stats , groups_stats ,items_stats}} />
    </>
  )
}

export default Home