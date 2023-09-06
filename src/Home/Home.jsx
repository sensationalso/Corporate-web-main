import React from 'react';
import logo from '../Image/logo.png';
import './Home.css';
import { List } from 'react-bootstrap-icons';
import Banner from '../Image/Banner.png';
import Dotted from '../Image/Dotted.png';
import icon1 from '../Image/icon1.png';
import icon2 from '../Image/icon2.png';
import icon3 from '../Image/icon3.png';
import About1 from '../Image/About1.png';
import About2 from '../Image/About2.png';
import Group from '../Image/Group.png';
import Service1 from '../Image/Service1.png';
import Service2 from '../Image/Service2.png';
import Information1 from '../Image/Information1.png';
import Information2 from '../Image/Information2.png';
import Project1 from '../Image/Project1.png';
import Project2 from '../Image/Project2.png';
import Project3 from '../Image/Project3.png';
import Project4 from '../Image/Project4.png';
import Work1 from '../Image/Work1.png';
import Team1 from '../Image/Team1.png';
import Team2 from '../Image/Team2.png';
import Team3 from '../Image/Team3.png';
import Footerlogo from '../Image/Footerlogo.png';



function Home() {

    return (
        <>
            <div className='Corporate'>
                <section className='header'>
                    <div className='container'>
                        <div className='row d-flex'>
                            <div className='logo col-3'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className='nav-bar col-6 align-item-center'>
                                <div className='nav-menu'>
                                    <ul className='d-flex list-unstyled justify-content-around text-decoration-none'>
                                        <li>
                                            <a className='active ' href="#">Home</a>
                                        </li>
                                        <li>
                                            <a className='' href="#">About</a>
                                        </li>
                                        <li>
                                            <a className='' href="#">Service</a>
                                        </li>
                                        <li>
                                            <a className='' href="#">Resources</a>
                                        </li>
                                        <li>
                                            <a className='' href="#">Projects</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='list-menu'>
                                    <List />
                                </div>
                            </div>
                            <div className='btn col'>
                                <button type="button">Contact Us Today</button>
                            </div>

                        </div>
                    </div>
                </section>
                <section className='banner mt-2 pt-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='banner-contant col-6 '>
                                <h1 className='pt-5 pb-4'>Our <span>consultation</span> is always in sync<br />with your strategy</h1>
                                <p>Scelerisque dignissim in leo at magna donec mi metus ipsum<br /> luctus nam elit sociis luctus et aliquam libero.</p>
                                <div className='btn px-0'>
                                    <button type="button">Our Service</button>
                                </div>
                            </div>
                            <div className='banner-image col-6'>
                                <img src={Banner} alt="Banner" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='feachure py'>
                    <div className='container'>
                        <div className='row'>
                            <div className='feachure-title'>
                                <span>CARE FEATURES</span>
                                <h1>Awesome Service With Our Tools</h1>
                            </div>
                            <div className='feachure-item d-flex'>
                                <div className='feachure-item1 col-4  justify-content-center text-center'>
                                    <img src={icon1} alt="icon1" />
                                    <h4 className='pt-3 '>App Development</h4>
                                    <p>Helping families live intelligently<br /> means we’re always working to<br /> bring our customers.</p>
                                </div>
                                <div className='feachure-item2 col-4 justify-content-center text-center'>
                                    <img src={icon2} alt="icon2" />
                                    <h4 className='pt-3 '>App Development</h4>
                                    <p>Helping families live intelligently<br /> means we’re always working to<br /> bring our customers.</p>
                                </div>
                                <div className='feachure-item3 col-4 justify-content-center text-center'>
                                    <img src={icon3} alt="icon3" />
                                    <h4 className='pt-3 '>App Development</h4>
                                    <p>Helping families live intelligently<br /> means we’re always working to<br /> bring our customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='about py'>
                    <div className='container '>
                        <div className='row'>
                            <div className='about-image col-6'>
                                <img className='img1' src={Group} alt='Group' />
                                <img className='img2' src={About1} alt='About1' />
                                <img className='img3' src={About2} alt='About2' />
                            </div>
                            <div className='about-contant col-6'>
                                <span>About</span>
                                <h1>Influencer Marketing<br /> for Your Business</h1>
                                <p className='py-3'>With over 25 years of experience, we have crafted thousands<br /> of Strategic discovery process that enables us to peel back<br /> the Layers which enable us to understand, connect, represent <br />and Dominate your market.</p>
                                <div className='btn px-0'>
                                    <button type="button">Phone Number: +002698 22 33</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='service py'>
                    <div className='container'>
                        <div className='row '>
                            <div className='service-title text-center'>
                                <span>Our Service</span>
                                <h1>Amazing Business Services</h1>
                            </div>
                            <div className='img2 img-fluid w-50 justify-content-center text-center'>
                                <img src={Service2} alt='Service2' />
                                <div class="info">
                                    <div class="info-content">
                                        <h2>Technical Analysis</h2>
                                        <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</span>
                                    </div>
                                </div>
                            </div>
                            <div className='img1 img-fluid w-50 justify-content-center text-center '>
                                <img src={Service1} alt='Service1' />
                                <div class="info">
                                    <div class="info-content">
                                        <h2>Technical Analysis</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='information py'>
                    <div className='container'>
                        <div className='row'>
                            <div className='information-image col-6'>
                                <img className='img1' src={Group} alt='Group' />
                                <img className='img2' src={Information1} alt='Information1' />
                                <div className='img-3'> <img src={Information2} alt='Information2' /></div>
                            </div>
                            <div className='information-contact col-6'>
                                <span>Who Are You</span>
                                <h1>Have A Project In Mind?<br />Let’s Get To Work.</h1>
                                <p className='py-3'>Sed ut perspiciatis unde omnis iste natus sit voluptatem<br /> accusantium doloremque laudantium totam rem apereaque<br /> abillo inventore veritatis quasi architecto beatae</p>
                                <p>1.Business Planning, Strategy</p>
                                <p>2. Financial Projections And Analysis</p>
                                <p>3.International Business Opportunities</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='project py'>
                    <div className='project-title'>
                        <span   >Latest Project & Case</span>
                        <h1>Let’s Looks Our Global Projects.</h1>
                    </div>
                    <div className='project-image d-flex'>
                        <div className='img1 img-fluid col-3 justify-content-center text-center'>
                            <img src={Project1} alt='Service2' />
                            <div class="pro-title">
                                <div class="pro-content">
                                    <h2>Technical Analysis</h2>
                                    <span>There are many variations of passages of Lorem Ipsum available, but the majority have</span>
                                </div>
                            </div>
                        </div>
                        <div className='img2 img-fluid col-3 justify-content-center text-center'>
                            <img src={Project2} alt='Service2' />
                            <div class="pro-title2">
                                <div class="pro-content2">
                                    <h2>Technical Analysis</h2>
                                    <span>There are many variations of passages of Lorem Ipsum available, but the majority have</span>
                                </div>
                            </div>
                        </div>
                        <div className='img3 img-fluid col-3 justify-content-center text-center'>
                            <img src={Project3} alt='Service2' />
                            <div class="pro-title3">
                                <div class="pro-content3">
                                    <h2>Technical Analysis</h2>
                                    <span>There are many variations of passages of Lorem Ipsum available, but the majority have</span>
                                </div>
                            </div>
                        </div>
                        <div className='img4 img-fluid col-3 justify-content-center text-center'>
                            <img src={Project4} alt='Service2' />
                            <div class="pro-title4">
                                <div class="pro-content4">
                                    <h2>Technical Analysis</h2>
                                    <span>There are many variations of passages of Lorem Ipsum available, but the majority have</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='work'>
                    <div className='work-sec'>
                        <div className='work-image'>
                            <img src={Work1} alt='work1' />
                        </div>
                        <div className='work-contant d-flex'>
                            <div className='work-title col-6'>
                                <h1>Get Free Consultations! We’re<br /> Ready to Work Together</h1>
                            </div>
                            <div className='btn col-6'>
                                <button type="button">Get Free Consultations</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='team py'>
                    <div className='container'>
                        <div className='row'>
                            <div className='team-contant d-flex justify-content-between'>
                                <div className='team-member-1 col-4'>
                                    <img src={Team1} alt='Team1' />
                                    <h4 className='p-3 pb-0'>Robert C. Simmons</h4>
                                    <p className='p-3 pt-0'>Business Consultant</p>
                                </div>
                                <div className='team-member-2 col-4'>
                                    <img src={Team2} alt='Team2' />
                                    <h4 className='p-3 pb-0'>Christopher L. Wagner</h4>
                                    <p className='p-3 pt-0'>Senior Manager</p>
                                </div>
                                <div className='team-member-3 col-4'>
                                    <img src={Team3} alt='Team3' />
                                    <h4 className='p-3 pb-0'>Lawrence C. Dickerson</h4>
                                    <p className='p-3 pt-0'>Financial Consultant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='newsletter py'>
                    <div className='container'>
                        <div className='row'>
                            <div className='newsletter-contant d-flex'>
                                <div className='col-7 newsletter-title'>
                                    <h3>Subscribe to Our Newsletter For<br /> Weekly Article Update.</h3>
                                    <span>Passages of lorem ipsum available, but the majority have suffered<br /> alteration, by injected words.</span>
                                </div>
                                <div className='col-2 hr-row d-flex'>
                                    <div className='vr'></div>
                                </div>
                                <div className='btn col-3 d-felx align-items-center'>
                                    <button type="button" className='px-5'>Get Start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='footer py'>
                    <div className='container'>
                        <div className='row'>
                            <div className='footer-contant'>
                                <div className='footer-logo col-6'>
                                    <img src={Footerlogo} alt='footerlogo'/>
                                    <h6 className='py-4'>2021 Award winning Vaccination<br/> and Lorem ipsum dolor sit amet</h6>
                                </div>
                                <div className='footer-menu1 col-2'>
                                    <ul>
                                    <li><a></a></li>
                                    
                                    </ul>
                                </div>
                                <div className='footer-menu2 col-2'></div>
                                <div className='footer-menu3 col-2'></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;
