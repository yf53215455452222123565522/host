import React, { useEffect , useState } from 'react'
import ImageSVG from '../Assets/img/pickup-delivery.svg';
import Imagedeliveryboy from '../Assets/img/delivery-boy.jpg';
import ImageBanner from "../Assets/img/banner1.png"
import SideBar from '../Components/OffCanvas/SideBar';
import '../Assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelpOffCanva from '../Components/OffCanvas/HelpOffCanva';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import orders from '../Redux/orders';
import ErrorPage from '../Components/ErrorPage';
import Loader from '../Components/Loader';
import { fetchOrder } from '../Redux/orders';

function TrackDeliveryBoy() {
    const handleRetry = () => window.location.reload(false);
    const [showHelpPage, setShowHelpPage] = useState(false);
    const handleShowHelpPage = () => setShowHelpPage(true);
    const handleCloseHelpPage = () => setShowHelpPage(false);
    const [showNavBar, setShowNavBar] = useState(false);
    const handleShowNavBar = () => setShowNavBar(true);
    const handleCloseNavBar = () => setShowNavBar(false);
    const { id = '51d5c5c2-fac3-4770-b9bd-666206de6ca1' } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOrder(id))
    }, [dispatch, id])
    const order = useSelector(state => state.orders);
    if (order.status === "idle") {
        return (<Loader />);
    }
    if (order.status === "loading") {
        return (<Loader />);
    }
    if (order.status === "failed") {
        return (
            <ErrorPage message={order.message} onRetry={handleRetry} />
        );
    }



    return (
        <div>
            <div className="track-delivery-boy d-flex flex-column vh-100">

                <div className="d-flex align-items-center gap-3 p-3 border-bottom shadow-sm">
                    <Link to={"/orderDetails/" + id} className="text-primary"><i className="icofont-close fs-5"></i></Link>
                    <div>
                        <h6 className="fw-bold mb-0">Commande #{id}</h6>
                        <p className="text-muted small m-0"><Link to="orderDetails" className="text-primary"> Details</Link> - {order.order.dateCommande}</p>
                    </div>
                    <div className="d-flex align-items-center gap-2 ms-auto">
                        <a className="toggle" href="#" onClick={handleShowNavBar}>
                            <b className="bg-dark bg-opacity-75 rounded-circle user-icon">
                                <i className="bi bi-list d-flex m-0 h4 text-white"></i>
                            </b>
                        </a>
                    </div>
                </div>

                <div className="my-auto overflow-auto vh-100">

                    <div className="ratio ratio-4x3 bg-light z-0">
                        <img src={ImageSVG} alt="" className="img-fluid" />
                    </div>

                    <div className="bg-white p-3">
                        <div className="text-center">
                            <div className="d-flex justify-content-center mb-3">
                                <div className="bg-white rounded-circle shadow-sm p-2 tracking-time">
                                    <span className="bg-white order-time">
                                        <div className="text-center">
                                            {/* <h1 className="fw-bold m-0">23</h1>
                                            <p className="text-muted small m-0">mins</p> */}
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <p className="text-muted text-center mb-4">Livré à domicile<br />
                            {order.order.user.address[0] && order.order.user.address[0].quartier +","+order.order.user.address[0].province+", "+order.order.user.address[0].ville}</p>
                        </div>
                        <div className="card border-secondary-subtle rounded-3 shadow-sm overflow-hidden mb-4">
                            <div
                                className="card-header d-flex align-items-center justify-content-between border-secondary-subtle border-bottom">
                                <p className="m-0 text-black">{order.order.items.length} articles emballés</p>
                                <Link to={"/orderDetails/"+order.order.id} className="text-primary">Voir tout les articles</Link>
                            </div>
                            <div className="card-body p-0">
                                <div className="d-flex align-items-center gap-3 p-3 border-bottom">
                                    <div>
                                        <span className="border rounded d-flex align-items-center justify-content-center p-2"><i className="icofont-package fs-5 text-muted"></i></span>
                                    </div>
                                    <div className="text-truncate">
                                        <h6 className="osahan-mb-1 fw-normal">Votre commande est<span className="fw-bold"> {order.order.state.state}</span></h6>
                                        <p className="text-muted small text-truncate m-0">commande {order.order.state.state}</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 p-3">
                                    <div>
                                        <span className="d-flex align-items-center justify-content-center">
                                            <img src={Imagedeliveryboy} alt="" className="img-fluid rounded shadow-sm delivery-boy-img" />
                                        </span>
                                    </div>
                                    <div className="text">
                                    {order.order.state.state=="commandé" &&     <h6 className="mb-0 fw-normal"><span className="fw-bold">En Attente d'un préparateur de commande</span> pour la préparer</h6>}
                                    {order.order.state.state=="en préparation" &&     <h6 className="mb-0 fw-normal"><span className="fw-bold">{order.order.preparateurDTO.firstname} {order.order.preparateurDTO.lastname}</span> en train de la préparer</h6>}
                                    {order.order.state.state=="prête à livré" &&     <h6 className="mb-0 fw-normal"><span className="fw-bold">{order.order.preparateurDTO.firstname} {order.order.preparateurDTO.lastname}</span> a terminé la préparation de votre commande </h6>}
                                    {order.order.state.state=="payé" &&     <h6 className="mb-0 fw-normal"><span className="fw-bold">Votre commande</span> est payé</h6>}


                                    </div>
                                    <a href="#" className="text-primary ms-auto"><i className="icofont-phone icofont-2x"></i></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 className="fw-bold pb-1">Tant que vous attendez votre demande.</h6>
                            <div className="rounded-4 ps-4 pt-4 shadow-sm d-flex gap-1 align-items-center bg-warning bg-gradient justify-content-between">
                                <div className="pb-4">
                                    <h1 className="fw-bolder text-black display-5 mb-1">50% OFF</h1>
                                    <p className="text-dark">Special Offer: Get 50% Cashback + <span className="text-success"><i className="bi bi-basket"></i> Livraison gratuite</span>
                                        <b className="bg-primary px-1 rounded-1 small text-uppercase fw-bold text-white mt-1 d-inline-block">Nouveau Clients</b></p>
                                    <Link to="/listing" className="btn btn-light text-success fw-bold rounded-3 shadow-sm btn-sm border-0">Acheter</Link>
                                </div>
                                <img src={ImageBanner} alt="" className="img-fluid mt-auto osahan-offer-banner" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-auto shadow-sm">
                    <a href="#" onClick={handleShowHelpPage} data-bs-toggle="offcanvas" data-bs-target="#help"
                        aria-controls="help" className="btn btn-primary w-100 rounded-0 text-uppercase btn-lg fw-bold">Aide</a>
                </div>
            </div>
            <HelpOffCanva showHelpPage={showHelpPage} handleCloseHelpPage={handleCloseHelpPage} />
            <SideBar show={showNavBar} handleClose={handleCloseNavBar} />
        </div>
    )
}

export default TrackDeliveryBoy