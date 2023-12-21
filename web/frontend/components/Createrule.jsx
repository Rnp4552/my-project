import React from 'react'
import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Text,
  FormLayout,
  TextField,
  RadioButton, LegacyStack, Badge, Checkbox
} from "@shopify/polaris";
import {Link} from 'react-router-dom';
import {useState, useCallback} from 'react';

const Createrule = () => {
  const [value, setValue] = useState('optional');
  var radval;

  const [selectedvalue, setselectedvalue] = useState('');

  const [Amount, setAmount] = useState('1');
  const handleWeightChange = (value) => {
      setAmount(value);
  }

  const handleChange = (event) => {
      setselectedvalue(event.target.value);
  };
 

  return (  
    <Page narrowWidth>
      <div style={{margin : "10px"}}>
      <Text variant="headingXl" as="h4" >
        Create a new rule
      </Text>
      </div>
      
      <Layout>
      
        <Layout.Section>

          
          <Card sectioned>
            <div>
            <Text variant="headingMd" as="h6">
            Rule name
            </Text>
            </div>

            <div >
              <br />
            <FormLayout>
          <TextField  onChange={() => {}} autoComplete="off" /> 
          </FormLayout>
            </div>
            
           
          </Card>

          <Card sectioned>
            

<LegacyStack vertical>
      <RadioButton
        label="Cart value"
        helpText="Trigger the rule when a customer's cart reaches a certain value.."
        id="disabled"
        name="accounts"
        value='cart value'
        onClick={() => handleChange(e)}
        // checked = {selectedvalue === 'cart value'}
      />
     
     <Badge tone="info">Draft</Badge>
      <RadioButton
        label="Product"
        helpText="Trigger the rule when a certain product or products are added to cart.."
        id="optional"
        name="accounts"
        value='product'
        onClick={() => handleChange(e)}
        // checked = {selectedvalue === 'product'}
      />
      <Badge tone="info">Draft</Badge>
      <RadioButton
        label="Collection"
        value='collection'
        helpText="Trigger the rule when products from certain collections are added to cart.."
        id="optional"
        name="accounts"
        checked={selectedvalue === 'collection'}
        onClick={() => handleChange(e)}
      />
</LegacyStack>
           
          </Card>

      {/* {
        selectedvalue === 'cart value' && (
          <Card sectioned>
              <LegacyStack vertical>
              <Text variant="headingLg" as="h5">
              When a customer's cart value reaches <br />
              <p>Amount</p>

              </Text>
              </LegacyStack>
          </Card>
        )
      } */}

      <Card sectioned>
        <LegacyStack vertical>
        <Text variant="headingMd" as="h6" >
        When a customer's cart value reaches </Text>
              <p>Amount</p>
              <FormLayout>
                <FormLayout.Group condensed>
                  <TextField
                    
                     type="number"
                     value={Amount}
                     onChange={(e) => handleWeightChange(e.target.value)}
                     error={Boolean(!Amount && unit)}
                     autoComplete="off"
                     readOnly={false} 
                  />
                  
                </FormLayout.Group>
              </FormLayout>
        </LegacyStack>
      </Card>

      <Card sectioned>
        <LegacyStack vertical>
        <Text variant="headingSm" as="h6">
        OPTIONS </Text>
              <p>Amount</p>
              <FormLayout>
                <FormLayout.Group condensed>
                  <TextField
                    
                     type="number"
                     value={Amount}
                     onChange={(e) => handleWeightChange(e.target.value)}
                     error={Boolean(!Amount && unit)}
                     autoComplete="off"
                     readOnly={false} 
                  />
                      
                  
                </FormLayout.Group>
              </FormLayout>
        </LegacyStack>
      </Card>
          
        </Layout.Section>
      </Layout>
    </Page>
    
  )
}

export default Createrule;
