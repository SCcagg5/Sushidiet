import React, {Component} from 'react';
import Topbar from "../../components/TopbarRecettes";

import "video-react/dist/video-react.css"; // import css
import MySnackbarContentWrapper from "../../tools/customSnackBar";
import firebase from "firebase";
import  Loader from "../../components/Loader"
import sushi from "../../assets/images/sushi.jpg"

import hourglass from "../../assets/images/hourglass.svg"
import chef_hat from "../../assets/images/chef_hat.svg"

import ClampLines from 'react-clamp-lines';




import Snackbar from "@material-ui/core/Snackbar"





class listeRecette extends Component {
    constructor(props){
        super(props);
        this.state={
            test:45,

            openAlert: false,
            alertMessage: "",
            alertType: "",
            loading :false,
            percentage:"",
            dataLength:"",
            recettes:[],
            plat:{
                dej:true,
                dess:true

            }
        }
    }

    componentDidMount() {

        firebase.database().ref("recettes/").on("value", (snapshot) => {
            let recettes = snapshot.val();

            let rets =[]
            for (let i =0 ;i<recettes.length;i++){

                rets.push(recettes[i])

            }

            this.setState(   {recettes:rets})





        })
    }









    render() {

        const nutriscore=
            {
                A:{
                    color:"#038141"
                },
                B:{
                    color:"#85bb2f"
                },
                C:{
                    color:"#fecb02"
                },
                D:{
                    color:"#ee8100"
                },
                E:{
                    color:"#e63e11"
                }
            }

        return (
            <div >
                <Topbar history={this.props.history}></Topbar>
                {this.state.loading === true &&
                <Loader percentage={this.state.percentage+"%"}>

                </Loader>
                }


                <div className="container-fluid w-100">

                    <img alt="" src={sushi} style={{width:"100%"}}/>


                    <div className="mt-3">
                        <div className="row align-items-center, justify-content-around  ">
                            <div className="col-md-auto">

                                    <button style={{color:"black",borderColor:"#a6a6a6",width:"100%"}} className="btn btn-secondary dropdown-toggle bg-white" type="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        PLATS
                                    </button>
                                    <div className="dropdown-menu">
                                        <text    className="dropdown-item" onClick={()=>this.props.history.push("/recette/dejeuner")}>Petit déjeuner</text>
                                        <text className="dropdown-item" href="#">Entrées,</text>
                                        <text className="dropdown-item" href="#"onClick={()=>this.props.history.push("/recette/PlatPrincipal")}>Plats principal</text>
                                        <text className="dropdown-item" href="#"onClick={()=>this.props.history.push("/recette/dessert")}>Desserts</text>
                                        <text className="dropdown-item" href="#">Apéritif dînatoire</text>
                                        <text className="dropdown-item" href="#">Snacks</text>
                                        <text className="dropdown-item" href="#">Soupes</text>
                                        <text className="dropdown-item" href="#">Sauces</text>
                                        <text className="dropdown-item" href="#">Shakes & Smoothie</text>

                                    </div>

                            </div>
                            <div className="col-md-auto">

                                <button style={{color:"black",borderColor:"#a6a6a6",width:"100%"}} className="btn btn-secondary dropdown-toggle bg-white" type="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TENDANCES
                                </button>
                                <div className="dropdown-menu">
                                   <text className="dropdown-item" href="#">Express</text>
                                   <text className="dropdown-item" href="#">Sans gluten</text>
                                   <text className="dropdown-item" href="#">Végétariennes</text>
                                   <text className="dropdown-item" href="#">Compatible phase Starter</text>
                                   <text className="dropdown-item" href="#">Sans Cuisson</text>



                                </div>

                            </div>
                            <div className="col-md-auto">

                                <button style={{color:"black",borderColor:"#a6a6a6",width:"100%"}} className="btn btn-secondary dropdown-toggle bg-white" type="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PREPARATIONS
                                </button>
                                <div className="dropdown-menu">
                                   <text className="dropdown-item" href="#">max 10 MIN </text>
                                   <text className="dropdown-item" href="#">MAX 15 MIN</text>
                                   <text className="dropdown-item" href="#">MAX 45 MIN </text>
                                   <text className="dropdown-item" href="#">PLUS de 45 min </text>


                                </div>

                            </div><div className="col-md-auto">

                            <button style={{color:"black",borderColor:"#a6a6a6",width:"100%"}} className="btn btn-secondary dropdown-toggle bg-white" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                DIFFICULTE
                            </button>
                            <div className="dropdown-menu">
                               <text className="dropdown-item" href="#">Facile</text>
                               <text className="dropdown-item" href="#">Moyenne</text>
                               <text className="dropdown-item" href="#">Difficile</text>


                            </div>

                        </div><div className="col-md-auto">

                            <button style={{color:"black",borderColor:"#a6a6a6",width:"100%"}} className="btn btn-secondary dropdown-toggle bg-white" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                RECETTES
                            </button>
                            <div className="dropdown-menu">
                               <text className="dropdown-item" href="#">Top recettes </text>
                               <text className="dropdown-item" href="#">Toutes les recettes</text>
                                <text className="dropdown-item" onClick={()=>this.props.history.push('/login')}>ajouter recette</text>


                            </div>

                        </div>
                            <div className="col-md-1">

                                <button style={{color:"black",borderColor:"#a6a6a6",width:"100%"}} className="btn btn-secondary dropdown-toggle bg-white" type="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    OCCASION
                                </button>
                                <div className="dropdown-menu">
                                   <text className="dropdown-item" href="#">Chandeleur</text>
                                   <text className="dropdown-item" href="#">Noël</text>
                                   <text className="dropdown-item" href="#">Saint Valentin</text>
                                   <text className="dropdown-item" href="#">Pàques</text>









                                </div>

                            </div>
                            <div className="col-md-1">

                                <button style={{color:"black",borderColor:"#a6a6a6",width:"100%"}} className="btn btn-secondary dropdown-toggle bg-white" type="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    VIDEO
                                </button>
                                <div className="dropdown-menu">
                                   <text className="dropdown-item" href="#">Action</text>
                                   <text className="dropdown-item" href="#">Another action</text>
                                   <text className="dropdown-item" href="#">Something else here</text>

                                </div>

                            </div>




                        </div>

                        <div className="mt-4">

                            <div className="row">
                                {this.state.recettes.map((item,key)=>(


                                    <div className="col-md-4 mt-3">
                                        <div className="card" style={{width:"80%",height:"100%"}}>
                                            <img alt="Card  cap"  className="card-img-top" src={item.photo} style={{height:300}} />
                                            <div className="card-body">

                                               <div className="row justify-content-between">
                                                   <div className="col-md-10">
                                                <h5 className="card-title">{item.nomRecette}</h5>
                                                   </div>
                                                   <div  style={{position:"relative",paddingTop:5,paddingBottom:5,backgroundColor:nutriscore[item.NUTRISCORE].color ,borderRadius:100,width:25,height:35,textAlign:"center"}}>
                                                       <h3  style={{color:"white",position:"absolute",left:4.1}} className="card-title"> {item.NUTRISCORE}</h3>
                                                   </div>
                                               </div>



                                                <div className="row align-items-end">

                                                    <div className="col-md-1">
                                                        <img alt="" src={hourglass}/>

                                                    </div>
                                                    <div>
                                                        <small>{item.Duree_prepa_repas.toString().toUpperCase()} </small>

                                                    </div>
                                                    <div className="col-md-1 ml-2">
                                                        <img alt="" src={chef_hat}/>

                                                    </div>
                                                    <div>
                                                        <small> Facile </small>

                                                    </div>

                                                </div>

                                                <div>
                                                    <ClampLines
                                                        text={item.Preparation}
                                                        id="really-unique-id"
                                                        lines={3}
                                                        ellipsis="..."
                                                        buttons={false}
                                                        lessText="Collapse"
                                                        className="custom-class"
                                                        innerElement="p"
                                                    />

                                                </div>
                                            </div>

                                            <div className="card-body">
                                               <text href="#" className="card-link"><u style={{color:"black"  }}>Lire la suite</u></text>

                                            </div>
                                        </div>

                                    </div>
                                ))}




                            </div>
                        </div>

                    </div>




                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.openAlert}
                    autoHideDuration={5000}
                    onClose={this.closeSnackbar}
                >
                    <MySnackbarContentWrapper
                        onClose={this.closeSnackbar}
                        variant={this.state.alertType}
                        message={this.state.alertMessage}
                    />
                </Snackbar>
            </div>


        );
    }
}

export default listeRecette;
