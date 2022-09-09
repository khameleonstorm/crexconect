import future from "../public/assets/future.jpg";
import keyhand from "../public/assets/keyhand.jpg";
import cryptopiggy from "../public/assets/cryptopiggy.jpg";
import diamondhand from "../public/assets/holdingdiamond.jpg";

export  const texts = [
  {
    id: 1,
    title: "WHY CHOOSE US?",
    desc: "We enhance our clients’ experiences and provide them with the right tools, unbiased advice, and specialists for each service, we established a structure unlike traditional real estate companies and other investment companies. Furthermore, buyers will have access to a plethora of services and specialists for post-home purchasing assistance, cryptocurrency and stock investment",
    reversed: true,
    imageUrl: future,
    background: "#EDFFF1"
  },
  {
    id: 2,
    title: "OWN A HOME!",
    desc: "Real estate purchase could be very problematic and likely the largest investments in your life, it is important that you select the right agent, know the neighborhoods, and thoroughly understand the real estate transaction process. Our agents’ knowledge and training makes them experts in negotiating the best purchase price for our clients.",
    reversed: false,
    imageUrl: keyhand,
    background: "#ffe4c466"
  },
  {
    id: 3,
    title: "CRYPTOCURRENCY INVESTMENT",
    desc: "Crexconnect trading engine has been designed to meet the highest online-trading industry standards. All systems have been uniquely coded to minimize latency and increase order execution speed. System automatically monitors all buying power factor, maximum order size, maximum position size after every order placement. Crexconnect prides itself on having one of the most advanced and reliable trading software on the market.",
    reversed: true,
    imageUrl: cryptopiggy,
    background: "#BAFFC9"
 
  },
  {
    id: 4,
    title: "INVEST IN GOLD & ETFs ",
    desc: "Stock traders demand speed, reliability, and flexibility. Our platforms deliver, and our team of experts is eager to help you along the way.",
    reversed: false,
    imageUrl: diamondhand,
    background: "#FDF6F5",
  }
]



export const plans = [
  {
    id: 1,
    amount: "$0 - $1k",
    title: "Basic",
    desc: "Suitable for all",
    falsepoints: ["Deposit fee"],
    truepoints: ["Pro Personalized Portfolio", "Auto Renew", "Yield per month: 60%", "Yield per day: 2.0%"],
    background: "#00A3FF", 
  },
  {
    id: 2,
    title: "Pro",
    amount: "$1k - $100k",
    desc: "Increased yield percentage",
    falsepoints: ["Management fee", "Deposit fee"],
    truepoints: ["Personalized Portfolio", "Auto Renew", "Yield per month: 158%", "Yield per day: 5.3%", "Trading Signal"],
    background: "#FFE600",   
  },
  {
    id: 3,
    amount: "$100k+",
    title: "Executive",
    desc: "Exclusive benifits and privileges",
    falsepoints: ["Management fee", "Deposit fee"],
    truepoints: ["Personalized Portfolio", "Trading Signal", "Defi insights", "Yield per month: 450%", "Yield per day: 15.0%"],
    background: "#00847C",     
  }
]



export const plans2 = [
  {
    id: 1,
    title: "Basic",
    amount: "$1k+",
    desc: "Max yield percentage",
    falsepoints: ["Management fee", "Deposit fee", "Limited profits"],
    truepoints: ["Personalized Portfolio", "Auto Renew", "Yield per month: 128%", "Yield per day: 4.3%"],
    background: "#FFE600",   
  },
  {
    id: 2,
    amount: "$100k+",
    title: "Plus",
    desc: "Increased yield percentage",
    falsepoints: ["Management fee", "Deposit fee"],
    truepoints: ["Personalized Portfolio", "Trading Signal", "Defi insights", "Yield per month: 450%", "Yield per day: 15.0%"],
    background: "#00847C",     
  }
]




export const about = [
  {
    id: 1,
    title: "About Us",
    span: ["We started by providing smart, simple investing, without the high fees and account minimums associated with traditional investment management. We invest your money in a globally diversified portfolio of low-cost index funds, and our cutting-edge technology helps you earn the best possible return, while optimizing your tax bill. This means we do things like automatic rebalancing, dividend reinvesting, and tax loss harvesting — services that were only available to the ultra rich until now or that most people found too time-consuming and tedious to do on their own.", 

    "Our expert financial advisors are always available when you need them. They can help plan your financial milestones and answer questions you might have about potential risks or what sort of investment accounts you should have.",

    "Investing is just one part of your financial picture. So, we've introduced more ways to reach your goals and manage your money. High interest savings. Commission-free trading. And features — like automatically investing your spare change — that make it easier to save for your future. That's because we believe that everyone should have access to the tools they need to make smart financial choices."
  ]  
  },
  {
    id: 2,
    title: "Who We Are",
    span: [" Crexconnect is backed by a team of world-class financial experts and the best technology talent. Our talented team of software engineers, designers, and data scientists have previously worked at such companies as Amazon, Google, and Apple.", 

    "Our Investment Advisory Committee are recognized thought leaders in the investment community. They play an advisory role in Wealthsimple's investment management process and serve as a sounding board for Crexconnect's management team."
  ]  
  },

]


export const locs = [
  {
    id: 1,
    city: "	Birmingham",
    state: "AL",
  },
  {
    id: 2,
    city: "Phoenix",
    state: "AZ",
  },
  {
    id: 3,
    city: "LosAngeles",
    state: "CA",
  },
  {
    id: 4,
    city: "Denver",
    state: "CO",
  },
  {
    id: 5,
    city: "Miami",
    state: "FL",
  },
  {
    id: 6,
    city: "Atlanta",
    state: " GA",
  },
  {
    id: 7,
    city: "Honolulu",
    state: "HI",
  },
  {
    id: 8,
    city: "Chicago",
    state: " IL",
  },
  {
    id: 9,
    city: "Frankfort",
    state: "KY",
  },
  {
    id: 10,
    city: "NewOrleans",
    state: "LA",
  },
  {
    id: 11,
    city: "Detroit",
    state: "MI",
  },
  {
    id: 12,
    city: "Minneapolis",
    state: "MN",
  },
  {
    id: 13,
    city: "KansasCity",
    state: "MO",
  },
  {
    id: 14,
    city: "LasVegas",
    state: "NV",
  },
  {
    id: 15,
    city: "Manchester",
    state: "NH",
  },
  {
    id: 16,
    city: "	NewYork",
    state: "NY",
  },
  {
    id: 17,
    city: "OklahomaCity",
    state: "OK",
  },
  {
    id: 18,
    city: "Houston",
    state: "TX",
  },
  {
    id: 19,
    city: "Richmond",
    state: "VA",
  },
  {
    id: 20,
    city: "Columbia",
    state: "SC",
  },
  {
    id: 21,
    city: "Newark",
    state: "NJ",
  },
  {
    id: 22,
    city: "Columbus",
    state: "OH",
  },
]




export const renderChart = () => {
  new TradingView.MediumWidget(
  {
  "symbols": [
    [
      "Gold",
      "TVC:GOLD|1D"
    ],
    [
      "Bitcoin",
      "BITSTAMP:BTCUSD|1D"
    ],
    [
      "Tether",
      "CRYPTOCAP:USDT|1D"
    ],
    [
      "Diamond",
      "BSE:DIAMOND|1D"
    ],
    [
      "Google",
      "CAPITALCOM:GOOG|12M"
    ],
    [
      "Apple",
      "NASDAQ:AAPL|12M"
    ],
    [
      "Microsoft",
      "NASDAQ:MSFT|12M"
    ]
  ],
  "chartOnly": false,
  "width": "100%",
  "height": "100%",
  "locale": "en",
  "colorTheme": "dark",
  "autosize": true,
  "showVolume": true,
  "hideDateRanges": false,
  "scalePosition": "right",
  "scaleMode": "Normal",
  "noTimeScale": true,
  "valuesTracking": "5",
  "chartType": "line",
  "fontColor": "rgba(120, 123, 134, 0.57)",
  "gridLineColor": "rgba(240, 243, 250, 0.03)",
  "volumeUpColor": "rgba(34, 171, 148, 0.5)",
  "volumeDownColor": "rgba(247, 82, 95, 0.5)",
  "backgroundColor": "rgba(0, 0, 0, 1)",
  "container_id": "tradingview_70c8b"
})
}

export const wallet = [
  {
    id: 1,
    title: "Bitcoin",
    network: "BTC",
    address: "bc1qdsmsk2cxtvgj9mqzz4wzruja8kde9qm5mjps6q",
    link: "https://link.trustwallet.com/send?address=bc1qdsmsk2cxtvgj9mqzz4wzruja8kde9qm5mjps6q&asset=c0",
  },
  {
    id: 2,
    title: "Ethereum",
    network: "ETH",
    address: "0xbfAf45d7e3bccBECf19b61CeDF55A47AC1D55402",
    link: "https://link.trustwallet.com/send?asset=c60&address=0xbfAf45d7e3bccBECf19b61CeDF55A47AC1D55402",
  },
  {
    id: 3,
    title: "BNB",
    network: "BNB",
    address: "bnb1zjd7mqpxrrsp7xpl03w8w3ekyj4mx6vmj00m0q",
    link: "https://link.trustwallet.com/send?asset=c714&address=bnb1zjd7mqpxrrsp7xpl03w8w3ekyj4mx6vmj00m0q",
  },
  {
    id: 4,
    title: "Tether",
    network: "USDT TRC20",
    address: "TEDykhNMP4n4inYXWS4ggdzbWCewzbive3",
    link: "https://link.trustwallet.com/send?asset=c195_tTR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&address=TEDykhNMP4n4inYXWS4ggdzbWCewzbive3",
  },
]

export const message = {
  success: "Order sent successfully",
  failed: "Order failed due to insufficient funds",
}

export const volumes = [
  { time: '2018-10-19', value: 19103293.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-22', value: 21737523.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-23', value: 29328713.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-24', value: 37435638.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-25', value: 25269995.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-10-26', value: 24973311.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-10-29', value: 22103692.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-30', value: 25231199.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-10-31', value: 24214427.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-01', value: 22533201.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-02', value: 14734412.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-05', value: 12733842.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-06', value: 12371207.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-07', value: 14891287.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-08', value: 12482392.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-09', value: 17365762.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-12', value: 13236769.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-13', value: 13047907.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-14', value: 18288710.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-15', value: 17147123.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-16', value: 19470986.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-19', value: 18405731.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-20', value: 22028957.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-21', value: 18482233.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-23', value: 7009050.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-26', value: 12308876.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-27', value: 14118867.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-11-28', value: 18662989.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-29', value: 14763658.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-11-30', value: 31142818.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-03', value: 27795428.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-04', value: 21727411.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-06', value: 26880429.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-07', value: 16948126.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-10', value: 16603356.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-11', value: 14991438.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-12', value: 18892182.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-13', value: 15454706.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-14', value: 13960870.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-17', value: 18902523.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-18', value: 18895777.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-19', value: 20968473.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-20', value: 26897008.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-21', value: 55413082.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-24', value: 15077207.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2018-12-26', value: 17970539.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-27', value: 17530977.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-28', value: 14771641.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2018-12-31', value: 15331758.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-02', value: 13969691.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-03', value: 19245411.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-04', value: 17035848.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-07', value: 16348982.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-08', value: 21425008.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-09', value: 18136000.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-10', value: 14259910.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-11', value: 15801548.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-14', value: 11342293.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-15', value: 10074386.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-16', value: 13411691.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-17', value: 15223854.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-18', value: 16802516.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-22', value: 18284771.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-23', value: 15109007.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-24', value: 12494109.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-25', value: 17806822.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-28', value: 25955718.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-29', value: 33789235.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-01-30', value: 27260036.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-01-31', value: 28585447.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-01', value: 13778392.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-04', value: 15818901.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-05', value: 14124794.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-06', value: 11391442.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-07', value: 12436168.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-08', value: 12011657.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-11', value: 9802798.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-12', value: 11227550.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-13', value: 11884803.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-14', value: 11190094.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-15', value: 15719416.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-19', value: 12272877.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-20', value: 11379006.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-21', value: 14680547.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-22', value: 12534431.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-25', value: 15051182.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-26', value: 12005571.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-02-27', value: 8962776.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-02-28', value: 15742971.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-01', value: 10942737.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-04', value: 13674737.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-05', value: 15749545.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-06', value: 13935530.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-07', value: 12644171.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-08', value: 10646710.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-11', value: 13627431.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-12', value: 12812980.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-13', value: 14168350.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-14', value: 12148349.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-15', value: 23715337.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-18', value: 12168133.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-19', value: 13462686.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-20', value: 11903104.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-21', value: 10920129.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-22', value: 25125385.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-25', value: 15463411.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-26', value: 12316901.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-27', value: 13290298.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-03-28', value: 20547060.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-03-29', value: 17283871.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-01', value: 16331140.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-02', value: 11408146.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-03', value: 15491724.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-04', value: 8776028.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-05', value: 11497780.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-08', value: 11680538.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-09', value: 10414416.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-10', value: 8782061.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-11', value: 9219930.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-12', value: 10847504.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-15', value: 7741472.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-16', value: 10239261.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-17', value: 15498037.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-18', value: 13189013.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-22', value: 11950365.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-23', value: 23488682.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-24', value: 13227084.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-25', value: 17425466.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-04-26', value: 16329727.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-29', value: 13984965.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-04-30', value: 15469002.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-01', value: 11627436.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-02', value: 14435436.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-03', value: 9388228.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-06', value: 10066145.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-07', value: 12963827.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-08', value: 12086743.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-09', value: 14835326.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-10', value: 10707335.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-13', value: 13759350.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-14', value: 12776175.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-15', value: 10806379.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-16', value: 11695064.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-17', value: 14436662.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-20', value: 20910590.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-21', value: 14016315.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-22', value: 11487448.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-23', value: 11707083.00, color: 'rgba(255,82,82, 0.8)' },
  { time: '2019-05-24', value: 8755506.00, color: 'rgba(0, 150, 136, 0.8)' },
  { time: '2019-05-28', value: 3097125.00, color: 'rgba(0, 150, 136, 0.8)' },
]

export const chartData = [
  { time: '2018-10-19', value: 54.90 },
  { time: '2018-10-22', value: 54.98 },
  { time: '2018-10-23', value: 57.21 },
  { time: '2018-10-24', value: 57.42 },
  { time: '2018-10-25', value: 56.43 },
  { time: '2018-10-26', value: 55.51 },
  { time: '2018-10-29', value: 56.48 },
  { time: '2018-10-30', value: 58.18 },
  { time: '2018-10-31', value: 57.09 },
  { time: '2018-11-01', value: 56.05 },
  { time: '2018-11-02', value: 56.63 },
  { time: '2018-11-05', value: 57.21 },
  { time: '2018-11-06', value: 57.21 },
  { time: '2018-11-07', value: 57.65 },
  { time: '2018-11-08', value: 58.27 },
  { time: '2018-11-09', value: 58.46 },
  { time: '2018-11-12', value: 58.72 },
  { time: '2018-11-13', value: 58.66 },
  { time: '2018-11-14', value: 58.94 },
  { time: '2018-11-15', value: 59.08 },
  { time: '2018-11-16', value: 60.21 },
  { time: '2018-11-19', value: 60.62 },
  { time: '2018-11-20', value: 59.46 },
  { time: '2018-11-21', value: 59.16 },
  { time: '2018-11-23', value: 58.64 },
  { time: '2018-11-26', value: 59.17 },
  { time: '2018-11-27', value: 60.65 },
  { time: '2018-11-28', value: 60.06 },
  { time: '2018-11-29', value: 59.45 },
  { time: '2018-11-30', value: 60.30 },
  { time: '2018-12-03', value: 58.16 },
  { time: '2018-12-04', value: 58.09 },
  { time: '2018-12-06', value: 58.08 },
  { time: '2018-12-07', value: 57.68 },
  { time: '2018-12-10', value: 58.27 },
  { time: '2018-12-11', value: 58.85 },
  { time: '2018-12-12', value: 57.25 },
  { time: '2018-12-13', value: 57.09 },
  { time: '2018-12-14', value: 57.08 },
  { time: '2018-12-17', value: 55.95 },
  { time: '2018-12-18', value: 55.65 },
  { time: '2018-12-19', value: 55.86 },
  { time: '2018-12-20', value: 55.07 },
  { time: '2018-12-21', value: 54.92 },
  { time: '2018-12-24', value: 53.05 },
  { time: '2018-12-26', value: 54.44 },
  { time: '2018-12-27', value: 55.15 },
  { time: '2018-12-28', value: 55.27 },
  { time: '2018-12-31', value: 56.22 },
  { time: '2019-01-02', value: 56.02 },
  { time: '2019-01-03', value: 56.22 },
  { time: '2019-01-04', value: 56.36 },
  { time: '2019-01-07', value: 56.72 },
  { time: '2019-01-08', value: 58.38 },
  { time: '2019-01-09', value: 57.05 },
  { time: '2019-01-10', value: 57.60 },
  { time: '2019-01-11', value: 58.02 },
  { time: '2019-01-14', value: 58.03 },
  { time: '2019-01-15', value: 58.10 },
  { time: '2019-01-16', value: 57.08 },
  { time: '2019-01-17', value: 56.83 },
  { time: '2019-01-18', value: 57.09 },
  { time: '2019-01-22', value: 56.99 },
  { time: '2019-01-23', value: 57.76 },
  { time: '2019-01-24', value: 57.07 },
  { time: '2019-01-25', value: 56.40 },
  { time: '2019-01-28', value: 55.07 },
  { time: '2019-01-29', value: 53.28 },
  { time: '2019-01-30', value: 54.00 },
  { time: '2019-01-31', value: 55.06 },
  { time: '2019-02-01', value: 54.55 },
  { time: '2019-02-04', value: 54.04 },
  { time: '2019-02-05', value: 54.14 },
  { time: '2019-02-06', value: 53.79 },
  { time: '2019-02-07', value: 53.57 },
  { time: '2019-02-08', value: 53.95 },
  { time: '2019-02-11', value: 54.05 },
  { time: '2019-02-12', value: 54.42 },
  { time: '2019-02-13', value: 54.48 },
  { time: '2019-02-14', value: 54.03 },
  { time: '2019-02-15', value: 55.16 },
  { time: '2019-02-19', value: 55.44 },
  { time: '2019-02-20', value: 55.76 },
  { time: '2019-02-21', value: 56.15 },
  { time: '2019-02-22', value: 56.92 },
  { time: '2019-02-25', value: 56.78 },
  { time: '2019-02-26', value: 56.64 },
  { time: '2019-02-27', value: 56.72 },
  { time: '2019-02-28', value: 56.92 },
  { time: '2019-03-01', value: 56.96 },
  { time: '2019-03-04', value: 56.24 },
  { time: '2019-03-05', value: 56.08 },
  { time: '2019-03-06', value: 55.68 },
  { time: '2019-03-07', value: 56.30 },
  { time: '2019-03-08', value: 56.53 },
  { time: '2019-03-11', value: 57.58 },
  { time: '2019-03-12', value: 57.43 },
  { time: '2019-03-13', value: 57.66 },
  { time: '2019-03-14', value: 57.95 },
  { time: '2019-03-15', value: 58.39 },
  { time: '2019-03-18', value: 58.07 },
  { time: '2019-03-19', value: 57.50 },
  { time: '2019-03-20', value: 57.67 },
  { time: '2019-03-21', value: 58.29 },
  { time: '2019-03-22', value: 59.76 },
  { time: '2019-03-25', value: 60.08 },
  { time: '2019-03-26', value: 60.63 },
  { time: '2019-03-27', value: 60.88 },
  { time: '2019-03-28', value: 59.08 },
  { time: '2019-03-29', value: 59.13 },
  { time: '2019-04-01', value: 59.09 },
  { time: '2019-04-02', value: 58.53 },
  { time: '2019-04-03', value: 58.87 },
  { time: '2019-04-04', value: 58.99 },
  { time: '2019-04-05', value: 59.09 },
  { time: '2019-04-08', value: 59.13 },
  { time: '2019-04-09', value: 58.40 },
  { time: '2019-04-10', value: 58.61 },
  { time: '2019-04-11', value: 58.56 },
  { time: '2019-04-12', value: 58.74 },
  { time: '2019-04-15', value: 58.71 },
  { time: '2019-04-16', value: 58.79 },
  { time: '2019-04-17', value: 57.78 },
  { time: '2019-04-18', value: 58.04 },
  { time: '2019-04-22', value: 58.37 },
  { time: '2019-04-23', value: 57.15 },
  { time: '2019-04-24', value: 57.08 },
  { time: '2019-04-25', value: 55.85 },
  { time: '2019-04-26', value: 56.58 },
  { time: '2019-04-29', value: 56.84 },
  { time: '2019-04-30', value: 57.19 },
  { time: '2019-05-01', value: 56.52 },
  { time: '2019-05-02', value: 56.99 },
  { time: '2019-05-03', value: 57.24 },
  { time: '2019-05-06', value: 56.91 },
  { time: '2019-05-07', value: 56.63 },
  { time: '2019-05-08', value: 56.38 },
  { time: '2019-05-09', value: 56.48 },
  { time: '2019-05-10', value: 56.91 },
  { time: '2019-05-13', value: 56.75 },
  { time: '2019-05-14', value: 56.55 },
  { time: '2019-05-15', value: 56.81 },
  { time: '2019-05-16', value: 57.38 },
  { time: '2019-05-17', value: 58.09 },
  { time: '2019-05-20', value: 59.01 },
  { time: '2019-05-21', value: 59.50 },
  { time: '2019-05-22', value: 59.25 },
  { time: '2019-05-23', value: 58.87 },
  { time: '2019-05-24', value: 59.32 },
  { time: '2019-05-28', value: 59.57 },
]