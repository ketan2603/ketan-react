
import React from "react";
import ContainerLayout from "globals/components/ContainerLayout";
import ContainerHeader from "globals/components/ContainerHeader";
import "./contact.style.scss";
import { Col, Row, Table } from "../../../node_modules/antd/lib/index";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
       karobarimemberList: [
      //   {"id":1,"s_name":"રવિભાઈ રમણભાઈ પ્રજાપતિ(પ્રમુખ)","zone_id":1},
      //   {"id":2,"s_name":"અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી)","zone_id":2},
      //   {"id":3,"s_name":"અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી)","zone_id":3},
      //   {"id":4,"s_name":"અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી)","zone_id":4},
      //   {"id":5,"s_name":"અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી)","zone_id":5},
      //   {"id":6,"s_name":"અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી)","zone_id":1},
      //   {"id":7,"s_name":"અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી)","zone_id":1},
      //   {"id":8,"s_name":"અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી)","zone_id":1},
      //   {"id":9,"s_name":"અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી)","zone_id":1},
      //   {"id":10,"s_name":"અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી)","zone_id":2},
      ],
      centralmemberList : [
        // {"Id":1,"c_name":"શ્રી શુકલભાઈ મોહનભાઈ દલવાડી","designamtion":"અઘ્યક્ષશ્રી","zone_id":1,"mobile_no":9427},
        // {"Id":1,"c_name":"શ્રી શુકલભાઈ મોહનભાઈ દલવાડી","designamtion":"અઘ્યક્ષશ્રી","zone_id":4,"mobile_no":9427}
      ],
      selectedmeber: ''
    }
  }

  callAllMembersAPi = async (values={}) => {
    this.setState({ selectedmeber: 'karobarimemberList'});
      try {
      const response = await fetch('http://localhost:4444/members/all', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const responseJson = await response.json();
      console.log("members data response", responseJson);
      this.setState({ karobarimemberList: responseJson });
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  callAllcommitteeMembers = async (values={}) => {
    this.setState({ selectedmeber: 'centralmemberList'});
      try {
      const response = await fetch('http://localhost:4444/committee/all', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const responseJson = await response.json();
      console.log("central data response", responseJson);
      this.setState({ centralmemberList: responseJson });
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      // <ContainerLayout>
      //   <ContainerHeader  style={{display:'flex',justifyContent:"center",fontwight:'bold'}}   title="સેન્ટ્રલ કમીટી" />
      //   <div className="home">
      //     <div>
      //     <h3>શ્રી શુકલભાઈ મોહનભાઈ દલવાડી(અઘ્યક્ષશ્રી): 9427893375</h3>
      //     <h3>શ્રી જયેન્દ્રભાઈ છીતુભાઈ દલવાડી (પ્રમુખશ્રી): 9879550665</h3>  
      //     <h3>શ્રી અશોકભાઈ મોતીભાઈ મારૂ (ઉપપ્રમુખશ્રી): 9725420217</h3>
      //       <h3>શ્રી કનુભાઈ ભીખાભાઈ પ્રજાપતિ(મંત્રીશ્રી): 9825463144</h3>
      //       <h3>શ્રી જયંતિભાઈ નરોત્તમભાઈ પ્રજાપતિ (સહમંત્રીશ્રી) : 9925014231</h3>
      //       <h3>શ્રી મુળજીભાઈ રામજીભાઈ મારૂ(ખજાનચીશ્રી  ): 9157250560</h3>
      //       <h3>શ્રી કનુભાઈ રણછોડભાઈ મારૂ (કારોબારી સભ્ય) : 9377437788</h3>                                       
      //   </div>
      //   <ContainerHeader title="આમદવાદ ઝોન કમીટી" />
      //   <div>
      //    <h3>શ્રી રવિભાઈ રમણભાઈ પ્રજાપતિ(પ્રમુખ): 9924917390</h3>
      //     <h3>શ્રી અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી): 90990 25985</h3>
      //     <h3>શ્રી પરેશભાઈ રમણભાઈ પ્રજાપતિતિ(સંગઠન મંત્રી): 9898007037</h3>
      //   </div>
      //   <ContainerHeader   title="વડોદરા ઝોન કમીટી" />
      //   <div>
      //     <h3>શ્રી દેવેન્દ્રભાઈ અરવિંદભાઈ પ્રજાપતિ(પ્રમુખ): 9824340015</h3>
      //     <h3>શ્રી અંબાલાલભાઈ છીતાભાઈ મારૂ (ઉપપ્રમુખશ્રી): 9898075142</h3>
      //     <h3>શ્રી દુર્ગેશભાઈ ગોરધનભાઈ પ્રજાપતિ (મંત્રીશ્રી):9173418046</h3>
      //     <h3>શ્રી આશિષભાઈ રમેશભાઈ પ્રજાપતિ(સહમંત્રીશ્રી):958687370</h3>
      //     <h3>શ્રી અશોકભાઈ સોમાભાઈ પ્રજાપતિ(ખજાનજી): 9898819327</h3>
      //     <h3>શ્રી રણછોડભાઈ તળજાભાઈ મારૂ(સંગઠન મંત્રી):9638771365</h3>
      //   </div>
      //   <ContainerHeader   title="ભરૂચ ઝોન કમીટી" />
      //   <div>
      //     <h3>રવિભાઈ રમણભાઈ પ્રજાપતિ(પ્રમુખ): 9924917390</h3>
      //     <h3>અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી): 90990 25985</h3>
      //     <h3>પરેશભાઈ રમણભાઈ પ્રજાપતિતિ(સંગઠન મંત્રી): 9898007037</h3>
      //   </div>
      //   <ContainerHeader   title="કરજણ ઝોન કમીટી" />
      //   <div>
      //     <h3>રવિભાઈ રમણભાઈ પ્રજાપતિ(પ્રમુખ): 9924917390</h3>
      //     <h3>અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી): 90990 25985</h3>
      //     <h3>પરેશભાઈ રમણભાઈ પ્રજાપતિતિ(સંગઠન મંત્રી): 9898007037</h3>
      //   </div> 
      //   <ContainerHeader   title="પાદરા ઝોન કમીટી" />
      //   <div>
      //     <h3>રવિભાઈ રમણભાઈ પ્રજાપતિ(પ્રમુખ): 9924917390</h3>
      //     <h3>અરવિંદભાઈ દેસાઈભાઈ પ્રજાપતિ(ખજાનજી): 90990 25985</h3>
      //     <h3>પરેશભાઈ રમણભાઈ પ્રજાપતિતિ(સંગઠન મંત્રી): 9898007037</h3>
      //   </div>
      //     <div>
      //       <h2>વેબસાઇટ મોબાઇલ એપ્લિકેશન સંપર્ક: </h2>
      //       <h3>
      //         {" "}
      //         વેબસાઇટ અથવા મોબાઇલ એપ્લિકેશનમાં કોઈ તકનીકી ભૂલ હોવાના કિસ્સામાં,
      //         નીચેની વિગતો પર કેતન પ્રજાપતિનો સંપર્ક કરો.
      //       </h3>
      //     </div>
      //     <h2>
      //       કેતનભાઈ ઘનશ્યામભાઈ પ્રજાપતિ : 9924731218,ketanprajapati245@gmail.com
      //     </h2>
      //   </div>
      // </ContainerLayout>

      <ContainerLayout>
         <div style={{ flex:1}}>
           <div style={{ flex:1, display:'flex',  flexDirection:'row'}}>
           </div>
            <div>
              <table>
                <tr>
                  <td style={{fontSize:22}} onClick={() => this.callAllcommitteeMembers()}>સેન્ટ્રલ કમીટી</td>
                  <td style={{fontSize:22}}onClick={() => this.callAllMembersAPi()}>કારોબારી સભ્ય</td>
                </tr>
              </table>
            </div>

            {/* Display સેન્ટ્રલ કમીટી data */}
            {
              this.state.selectedmeber === 'centralmemberList' ? (
                <div style={{ padding:20 }}>
                    <div style={{ paddingBottom:10 }}>
                      <h2>સેન્ટ્રલ કમીટી</h2>
                      <table>
                        <tr>
                          <th>ક્રમ</th>
                          <th>નામ</th>
                          <th>પદ</th>
                          <th>મોબાઇલ નંબર</th>
                        </tr>
                          {
                            this.state.centralmemberList.filter((item) => item.zone_id == 1).map((item) => {
                              return (
                                  <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.c_name}</td>
                                    <td>{item.designamtion}</td>
                                    <td>{item.mobile_no}</td>
                                  </tr>
                                );
                            })
                          }
                      </table>
                    </div>
                    <div style={{ paddingBottom:10 }}>
                      <h2>આમદવાદ ઝોન </h2> 
                      <table>
                        <tr>
                          <th>ક્રમ</th>
                          <th>નામ</th>
                          <th>પદ</th>
                          <th>મોબાઇલ નંબર</th>
                        </tr>
                          {
                            this.state.centralmemberList.filter((item) => item.zone_id == 2).map((item) => {
                              return (
                                  <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.c_name}</td>
                                    <td>{item.designamtion}</td>
                                    <td>{item.mobile_no}</td>
                                  </tr>
                                );
                            })
                          }
                      </table>
                    </div>

                    <div style={{ paddingBottom:10 }}>
                      <h2>વડોદરા ઝોન</h2> 
                      <table>
                        <tr>
                          <th>ક્રમ</th>
                          <th>નામ</th>
                          <th>પદ</th>
                          <th>મોબાઇલ નંબર</th>
                        </tr>
                          {
                            this.state.centralmemberList.filter((item) => item.zone_id == 3).map((item) => {
                              return (
                                  <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.c_name}</td>
                                    <td>{item.designamtion}</td>
                                    <td>{item.mobile_no}</td>
                                  </tr>
                                );
                            })
                          }
                      </table>
                    </div>

                    <div style={{ paddingBottom:10 }}>
                      <h2>ભરૂચ ઝોન</h2> 
                      <table>
                        <tr>
                          <th>ક્રમ</th>
                          <th>નામ</th>
                          <th>પદ</th>
                          <th>મોબાઇલ નંબર</th>
                        </tr>
                          {
                            this.state.centralmemberList.filter((item) => item.zone_id == 4).map((item) => {
                              return (
                                  <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.c_name}</td>
                                    <td>{item.designamtion}</td>
                                    <td>{item.mobile_no}</td>
                                  </tr>
                                );
                            })
                          }
                      </table>
                    </div>

                    <div style={{ paddingBottom:10 }}>
                      <h2>કરજણ ઝોન</h2> 
                      <table>
                        <tr>
                          <th>ક્રમ</th>
                          <th>નામ</th>
                          <th>પદ</th>
                          <th>મોબાઇલ નંબર</th>
                        </tr>
                          {
                            this.state.centralmemberList.filter((item) => item.zone_id == 5).map((item) => {
                              return (
                                  <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.c_name}</td>
                                    <td>{item.designamtion}</td>
                                    <td>{item.mobile_no}</td>
                                  </tr>
                                );
                            })
                          }
                      </table>
                    </div>

                    <div style={{ paddingBottom:10 }}>
                      <h2>પાદરા ઝોન</h2> 
                      <table>
                        <tr>
                          <th>ક્રમ</th>
                          <th>નામ</th>
                          <th>પદ</th>
                          <th>મોબાઇલ નંબર</th>
                        </tr>
                          {
                            this.state.centralmemberList.filter((item) => item.zone_id == 6).map((item) => {
                              return (
                                  <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.c_name}</td>
                                    <td>{item.designamtion}</td>
                                    <td>{item.mobile_no}</td>
                                  </tr>
                                );
                            })
                          }
                      </table>
                    </div>
                </div>
              ) : (null)
            }

            {/* Display કારોબારી સભ્ય data */}
            {
              this.state.selectedmeber === 'karobarimemberList' ? (
                <div style={{ padding:20 }}>
                  {/* <center>
                    <h2 style={{ color:'red'}}>કારોબારી સભ્ય</h2>
                  </center> */}
                  <div style={{ padding:10 }}>
                    <h2>આમદવાદ ઝોન કારોબારી સભ્ય </h2> 
                      <Row>
                          {this.state.karobarimemberList.filter((item) => item.zone_id == 1).map((item) => {
                            return (
                              <Col span={8}>{<h3>{item.s_name}</h3>} </Col>
                              );
                          })}
                      </Row>
                  </div>
                  <div style={{ padding:10 }}>
                    <h2>વડોદરા ઝોન કારોબારી સભ્ય </h2>
                      <Row>
                          {this.state.karobarimemberList.filter((item) => item.zone_id == 2).map((item) => {
                            return (
                              <Col span={8}>{<h3>{item.s_name}</h3>} </Col>
                              );
                          })}
                      </Row>
                  </div>
                  <div style={{ padding:10 }}>
                    <h2>ભરૂચ ઝોન કારોબારી સભ્ય </h2>
                      <Row>
                          {this.state.karobarimemberList.filter((item) => item.zone_id == 3).map((item) => {
                            return (
                              <Col span={8}>{<h3>{item.s_name}</h3>} </Col>
                              );
                          })}
                      </Row>
                  </div>
                  <div style={{ padding:10 }}>
                    <h2>કરજણ ઝોન કારોબારી સભ્ય </h2>
                      <Row>
                          {this.state.karobarimemberList.filter((item) => item.zone_id == 4).map((item) => {
                            return (
                              <Col span={8}>{<h3>{item.s_name}</h3>} </Col>
                              );
                          })}
                      </Row>
                  </div>
                  <div style={{ padding:10 }}>
                    <h2>પાદરા ઝોન કારોબારી સભ્ય </h2>
                      <Row>
                          {this.state.karobarimemberList.filter((item) => item.zone_id == 5).map((item) => {
                            return (
                              <Col span={8}>{<h3>{item.s_name}</h3>} </Col>
                              );
                          })}
                      </Row>
                  </div>
                </div>
              ) : (null)
            }
          </div>
          <div>
          <h2>વેબસાઇટ મોબાઇલ એપ્લિકેશન સંપર્ક: </h2>
             <h3>
              {" "}
               વેબસાઇટ અથવા મોબાઇલ એપ્લિકેશનમાં કોઈ તકનીકી ભૂલ હોવાના કિસ્સામાં,
               નીચેની વિગતો પર કેતન પ્રજાપતિનો સંપર્ક કરો.
             </h3>
          <h2>
             કેતનભાઈ ઘનશ્યામભાઈ પ્રજાપતિ : 9924731218,ketanprajapati245@gmail.com
           </h2>
        </div>
      </ContainerLayout>
    );
  }
}

export default Home;