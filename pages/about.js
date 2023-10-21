import React from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Header from '@/components/Header'
import SEODiagnosis from '@/components/SEODiagnosis'

const about = () => {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 lg:py-56 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-6xl lg:text-9xl pb-5 font-bold text-gray-900">
              About Me
              {/* <br class="hidden lg:inline-block">readymade gluten</br> */}
            </h1>
            <p className="mb-8 leading-relaxed text-2xl">
              I help electricians and electrical contractors in New York City
              get more leads and customers with search engine optimization!
            </p>
            <div className="flex justify-center">
              <Link
                href="#diagnosis"
                className="inline-flex text-white bg-orange-800 border-0 py-4 px-8  focus:outline-none hover:bg-orange-700 rounded text-2xl no-underline"
              >
                Get My SEO Diagnosis &#8594;
              </Link>
            </div>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="SEO for Electricians in NYC."
              title="SEO for Electricians in NYC."
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-w-7xl mx-auto">
          <div className="py-5 lg:py-10">
            <h2 className="text-3xl lg:text-7xl pb-5 font-bold text-center">
              With a Huge Pool of Electrical SEO Companies in NYC, Why Work With
              Me, and Trust Me to Help With Your SEO?
            </h2>
            <div className="py-10">
              <h3 className="text-2xl pb-5  font-semibold">
                #1. I Focus on Your Results
              </h3>
              <p>
                I’m your go-to person for all things SEO, especially when it
                comes to local electrical businesses in NYC.
              </p>
              <p>My main goal?</p>
              <p>
                To get you real results that genuinely help your company grow.
              </p>
              <p>
                I know SEO isn’t just about getting your website to show up in
                search results or getting lots of clicks. It’s about bringing in
                real customers who are interested in your electrical services,
                boosting your sales, and helping your business expand.
              </p>
              <p>
                I’m all about creating strategies that do more than just make
                your website visible — I make sure that the people who see your
                site actually become customers, helping your revenue go up!
              </p>
              <p>
                I keep a close eye on all kinds of data to see how well
                everything’s working and tweak things as needed to get the best
                results. And don’t worry, I’ll keep you in the loop with regular
                updates so you can see the awesome return you’re getting on your
                investment.
              </p>
              <p>
                I’m totally committed to making sure your SEO strategies do what
                they’re supposed to do, and I won’t stop until your business is
                rocking. I’m here to make sure your business not only stands out
                in the NYC, but also really succeeds and gets those customers
                and sales you’re after!
              </p>
            </div>
            <div className="py-10">
              <h3 className="text-2xl pb-5  font-semibold">
                #2. I Build Custom SEO Plans for Your Business
              </h3>
              <p>
                I’m all about crafting SEO plans that are tailor-made for your
                specific business needs.
              </p>
              <p>
                I’m not a fan of the “one-size-fits-all” approach. Instead, I’m
                all about picking the strategies that mesh well with your goals,
                your industry, and, of course, your audience.
              </p>
              <p>
                By really diving into understanding your business and what you
                want to achieve online, I make sure every aspect of the plan,
                from selecting the right keywords to creating awesome content,
                is customized just for you to boost your online presence.
              </p>
              <p>
                And I’m always tuning in, checking out the analytics and
                performance data, and tweaking things here and there to make
                sure everything’s running smoothly and effectively.
              </p>
              <p>
                I’m totally committed to making sure your SEO strategies do what
                they’re supposed to do, and I won’t stop until your electrical
                company is rocking the SEO game. I’m here to make sure your
                business not only stands out online but also really succeeds and
                gets those customers and sales you’re after!
              </p>
              <p>
                This personalized touch is my secret sauce to driving more
                organic traffic your way and giving your site a boost in the
                search engine rankings!
              </p>
            </div>
            <div className="py-10">
              <h3 className="text-2xl pb-5 font-semibold">
                #3. I Know What I'm Doing
              </h3>
              <p>
                I've honed my skills in many fields and have a track record of
                getting things done.
              </p>
              <p>
                I’m not a fan of the “one-size-fits-all” approach. Instead, I’m
                all about picking the strategies that mesh well with your goals,
                your industry, and, of course, your audience.
              </p>
              <p>
                My approach to SEO is holistic, covering everything from keyword
                research and content creation to technical SEO and link
                building.
              </p>
              <p>
                I keep up with the latest SEO trends and algorithm changes to
                ensure my strategies are always practical and relevant. I also
                know how important it is to communicate clearly and work with my
                clients to help them reach their goals.
              </p>
              <p>
                I’m totally committed to making sure your SEO strategies do what
                they’re supposed to do, and I won’t stop until your electrical
                company is rocking the SEO game. I’m here to make sure your
                business not only stands out online but also really succeeds and
                gets those customers and sales you’re after!
              </p>
              <p>
                When you work with me, you're working with a professional who
                knows everything there is to know about electrical SEO and how
                to make it work for your business.
              </p>
            </div>
            <div className="py-10">
              <h3 className="text-2xl pb-5 font-semibold">
                #4. I’m All About Transparency!
              </h3>
              <p>
                Keeping you in the know about your SEO campaigns at every step
                is super important to me.
              </p>
              <p>
                I don’t just tell you what I’m up to but also why I’m doing it.
              </p>
              <p>
                I’ll send you regular, easy-to-understand reports showing you
                exactly what my work is achieving. You’ll see all the important
                stuff—how we’re doing on key performance indicators, metrics,
                and any milestones we’ve hit.
              </p>
              <p>
                And, if we run into any snags, I’ll be straight-up with you
                about what’s going on and how we’re going to fix it.
              </p>
              <p>
                I aim to make the sometimes puzzling world of SEO super clear
                and easy for you to get. This way, you’re not just watching from
                the sidelines—you’re an informed member of the team.
              </p>
              <p>
                Being totally open and honest is all about building a trusting
                relationship with you. It ensures we’re working together in the
                most genuine way possible!
              </p>
            </div>
            <div className="py-10">
              <h3 className="text-2xl pb-5 font-semibold">
                #5. No Working with the Competition!
              </h3>
              <p>
                My rule is super simple: I won’t work with any other electrical
                companies in your local area.
              </p>
              <p>
                I’m a big believer in giving my clients my full attention, and
                that means pouring all my skills and resources into one business
                per industry in each market area. This way, you know I’m 100% on
                your side with no divided loyalties.
              </p>
              <p>
                This also means that all the cool strategies, insights, and
                competitive edges I come up with are yours and yours alone—none
                of your competitors will get their hands on them!
              </p>
              <p>
                I’m really dedicated to this “one-per-area” approach because it
                lets me concentrate fully on making sure your business blows the
                others out of the water in the search engine results!
              </p>
            </div>
          </div>
        </div>
      </section>
      <SEODiagnosis />
      <Footer />
    </>
  )
}

export default about
