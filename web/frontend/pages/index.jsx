import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Text,
  Badge,
  Button
} from "@shopify/polaris";
import { TitleBar, useHistory } from "@shopify/app-bridge-react";
import {useAppBridge} from "@shopify/app-bridge-react"
import { useTranslation, Trans } from "react-i18next";
import {Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

import {ProgressBar, LegacyCard,LegacyStack,Collapsible} from '@shopify/polaris';
import { useState, useCallback } from "react";
import { ProductsCard } from "../components"; 
import { Flash } from "@shopify/app-bridge/actions";  
import Createrule from "../components/Createrule";

export default function HomePage() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleToggle1 = useCallback(() => setOpen1((open) => !open),[]);
  const handleToggle2 = useCallback(() => setOpen2((open) => !open),[]);
  const handleToggle3 = useCallback(() => setOpen3((open) => !open),[]);
  const handleToggle4 = useCallback(() => setOpen4((open) => !open),[]);

  // const app = useAppBridge();
  // const history = useHistory(app);

  // const handlebuttonclicks = ()=> 
  // {
  //   history.push('/create-rule')
  // }

  return (
    <Page BroadWidth>
      
      <Layout>
        <Layout.Section>
          <Card sectioned>
            
              <Stack.Item>
                <center spacing="tight">
                <TextContainer>
                <center>
                  <img src="/assets/Gift-card.png" alt="" class="center-image"/>
                  </center>
               
                <Text variant="headingLg" as="h5" style={{textAlign : "center"}}>
                    Welcome to Auto Gift Cart
                </Text>
                <div>
                <p>
                    Welcome to Auto gift cart. We make it easy to automagically add items to your customers' carts based on simple rules.
                  </p>
                </div>
                </TextContainer>
                </center>
              </Stack.Item>
              
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card sectioned>
          
            <Stack
              wrap={false}
              spacing="none"
              distribution="center"
              alignment="baseline"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                
                 <b>Auto Gift cart Setup guide</b>
                  <p>Use this guide to start using Auto Gift cart.</p>
                  <div style={{width: 900}}>
                <ProgressBar progress={25} size="small" tone="primary" />
                </div>
                  <hr />
                  <LegacyCard sectioned>
                    
        <LegacyStack vertical>
        <h3 onClick={handleToggle1}><Badge progress="complete">Fulfilled </Badge> Enable app embed</h3>
        <Collapsible
            open={open1}
            id="basic-collapsible"
            transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
            expandOnPrint
          >
              <TextContainer>
              <p>
                Activate the app in your theme to get started Click 'Activate App' below or nevigate to Online Store &gt; 
                Customize Theme &gt; Theme Settings &gt; App embeds &gt; Enable Auto Gift Cart &gt; Save. 
              </p>
              <Button>Activate App</Button>
            </TextContainer>
          </Collapsible>
          </LegacyStack></LegacyCard>

          <LegacyCard sectioned>
        <LegacyStack vertical>
        <h3 onClick={handleToggle2}><Badge progress="complete">Fulfilled </Badge> Create your first rule</h3>
        <Collapsible
            open={open2}
            id="basic-collapsible"
            transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
            expandOnPrint
          >

              <TextContainer>
              <p>
               Create your first rule to get started
              </p>
              {/* <Button>Create rule</Button> */}
              <Link to="/createrule" style={{display: "inline-block", padding: "10px", textDecoration: "none",  color: "black",border: "1px solid black", borderRadius : "5px"}}> Create rule </Link>

              
              {/* <Route path="/created-rule" component={createrule}/>   */}

             
            </TextContainer>
          </Collapsible>
          </LegacyStack></LegacyCard>
                  
          <LegacyCard sectioned>
                    <LegacyStack vertical>
                    <h3 onClick={handleToggle3}>Verify Auto Gift Card compatibility</h3>
                    <Collapsible
            open={open3}
            id="basic-collapsible"
            transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
            expandOnPrint
          >

              <TextContainer>
              <p>
                Auto Gift Cart has been designed to work with other apps, but sometimes there are clashes with other
                apps and scripts. Please test the functionality of other apps on your Store
                by activating your rule and opening your store in a private browser window.
              </p>
              <Button>Compatibility varified</Button> &nbsp;
              <Button>Contact support</Button>
            </TextContainer>
          </Collapsible>

                    </LegacyStack>
                  </LegacyCard>
                  
                  <LegacyCard sectioned>
                    <LegacyStack vertical>
                    <h3 onClick={handleToggle4}><Badge progress="complete">Fulfilled </Badge> Sell more with an upsell rule</h3>
                    <Collapsible
            open={open4}
            id="basic-collapsible"
            transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
            expandOnPrint
          >

              <TextContainer>
              <p>
                Boost your AOV with an Auto Gift Cart rule that tempts your customers to add extra items to their cart.
              </p>
              <Button>Create rule</Button>
            </TextContainer>
          </Collapsible>

                    </LegacyStack>
                  </LegacyCard>
                      

                </TextContainer>
              </Stack.Item>
              
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
