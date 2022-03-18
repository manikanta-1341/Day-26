import {Container,Grid,Card,CardActions ,CardContent , Button ,Typography } from '@mui/material';




export default function Bootstrap_pricelist(){
  return(
  <>
    <Container>
      <div className="container">
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 , xl:12}}>
            <Grid item xs={12}  sm={6} md={4} xl={6}>
              <Card sx={{ minWidth: 275 }} className="card_1">
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <p className="free">FREE</p>
                  </Typography>
                  <Typography variant="h5" component="div">
                  <div className="price">
                    <h1 className="number">$0</h1>
                    <p className="month">/month</p>
                  </div>
                  <hr></hr>
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <ul className="ul_1st" type="none">
                  <li><i class="fa-solid fa-check"></i> Single User</li>
                  <li><i class="fa-solid fa-check"></i> 5GB Storage</li>
                  <li><i class="fa-solid fa-check"></i> Unlimited Public Projects</li>
                  <li><i class="fa-solid fa-check"></i> Community Access</li>
                  </ul>
                  <div className="low_opacity">
                  <ul type="none">
                  <li><i class="fa-solid fa-xmark"></i> Unlimited Private Projects</li>
                  <li><i class="fa-solid fa-xmark"></i> Dedicated Phone Support</li>
                  <li><i class="fa-solid fa-xmark"></i> Free Subdomain</li>
                  <li><i class="fa-solid fa-xmark"></i> Monthly Status Reports</li>
                  </ul></div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button  variant="contained" size="large" className="rounded-10 button">Button</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={6}>
              <Card sx={{ minWidth: 275 }} className="card_2">
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <p className="plus">PLUS</p>
                  </Typography>
                  <Typography variant="h5" component="div">
                  <div className="price">
                  <h1 className="number">$9</h1><p className="month">/month</p>
                  </div>
                  <hr></hr>
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <ul className="ul_2nd" type="none">
                  <li><span className="diff_features"><i class="fa-solid fa-check"></i> 5 Users</span></li>
                  <li><i class="fa-solid fa-check"></i> 5GB Storage</li>
                  <li><i class="fa-solid fa-check"></i> Unlimited Public Projects</li>
                  <li><i class="fa-solid fa-check"></i> Community Access</li>
                  <li><i class="fa-solid fa-check"></i> Unlimited Private Projects</li>
                  <li><i class="fa-solid fa-check"></i> Dedicated Phone Support</li>
                  <li><i class="fa-solid fa-check"></i> Free Subdomain</li>
                  </ul>
                  <div className="low_opacity">
                  <ul type="none">
                  <li><i class="fa-solid fa-xmark"></i> Monthly Status Reports</li>
                  </ul></div>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="large" className="button">Button</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} >
              <Card sx={{ minWidth: 275 }} className="card_3">
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  <p className="pro">PRO</p>
                  </Typography>
                  <Typography variant="h5" component="div">
                  <div className="price">
                  <h1 className="number">$49</h1><p className="month">/month</p></div>
                  <hr></hr>
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <ul className="ul_3rd" type="none">
                  <li><span className="diff_features"><i class="fa-solid fa-check"></i> Unlimited Users</span></li>
                  <li><i class="fa-solid fa-check"></i> 150GB Storage</li>
                  <li><i class="fa-solid fa-check"></i> Unlimited Public Projects</li>
                  <li><i class="fa-solid fa-check"></i> Community Access</li>
                  <li><i class="fa-solid fa-check"></i> Unlimited Private Projects</li>
                  <li><i class="fa-solid fa-check"></i> Dedicated Phone Support</li>
                  <li><span className="diff_features"><i class="fa-solid fa-check"></i> Unlimited</span> Free Subdomain</li>
                  <li><i class="fa-solid fa-check"></i> Monthly Status Reports</li>
                  </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button  variant="contained" size="large" className="button">Button</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
      </div>
    </Container>
  </>
  );
}