const upcomingEventsData=[
    {
        id:1,
        date:"Monday, 25 February 2023",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        name:"Speaker Name",
        accuracy:true,
    },
    {
        id:2,
        date:"Friday, 19 March 2023",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
        name:"Speaker Name",
        accuracy:true,
    },
    {
        id:3,
        date:"Tuesday, 11 May 2023",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        name:"Speaker Name",
        accuracy:false,
    },
    {
        id:4,
        date:"Thursday, 25 September 2023",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        name:"Speaker Name",
        accuracy:false,
    },
    {
        id:5,
        date:"Thursday, 25 February 2023",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        name:"Speaker Name",
        accuracy:true,
    },
    {
        id:6,
        date:"Wednesday, 25 February 2023",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        name:"Speaker Name",
        accuracy:false,
    },
    {
        id:7,
        date:"Friday, 25 February 2023",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        name:"Speaker Name",
        accuracy:true,
    },
    {
        id:8,
        date:"Monday, 25 February 2023",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        name:"Speaker Name",
        accuracy:true,
    },
    {
        id:9,
        date:"Tuesday, 25 February 2023",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        name:"Speaker Name",
        accuracy:true,
    },
    {
        id:10,
        date:"Wednesday, 25 February 2023",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        name:"Speaker Name",
        accuracy:false,
    },
]

/*ALL UPCOMING EVENTS */

let allUpcomingEvents=document.getElementById("allUpcomingEvents")
allUpcomingEvents.innerHTML = upcomingEventsData.map((item)=> {
	return `
    <div class='d-flex flex-column border border-primary pb-3 eventCard '>
                <h2 class="fs-6  text-center text-light bg-primary  py-3  ">${item.date}</h2>
                <p class="text-center px-3">${item.desc}</p>
                <h3 class="text-center text-primary">${item.name}</h3>
                <div class="d-flex justify-content-center gap-2 align-items-center ">
                    <button class=${item.accuracy ? " registerBtn" : "d-none"}>REGISTER</button>
                    <button class=${item.accuracy ? " calenderBtn" : "d-none"}>ADD TO CALENDER</button>
                    <button class=${item.accuracy ? 'd-none' : 'moreBtn'}>MORE DETAILS COMING SOON</button>
                </div>
            </div>
`
}).join('') 