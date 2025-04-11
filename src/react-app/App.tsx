import { useState } from "react";
import { Button, AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent } from "@mui/material";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <AppBar position="static" className="bg-blue-600">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" className="font-bold">
            Code With MCB
          </Typography>
          <div className="flex gap-4">
            <a href="#home" className="text-white no-underline">Home</a>
            <a href="#videos" className="text-white no-underline">Videos</a>
            <a href="#blogs" className="text-white no-underline">Blogs</a>
            <a href="#about" className="text-white no-underline">About</a>
            <a href="#contact" className="text-white no-underline">Contact</a>
          </div>
          <Button variant="contained" onClick={toggleDarkMode} className="bg-white text-blue-600">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Toolbar>
      </AppBar>

      <section id="home" className="hero bg-gradient-to-b from-blue-600 to-blue-800 text-white text-center py-16">
        <Typography variant="h3" className="font-bold mb-4">Welcome to Code With MCB</Typography>
        <Typography variant="body1" className="max-w-md mx-auto">
          Your ultimate destination for coding tutorials and tech insights!
        </Typography>
      </section>

      <Container className="my-8">
        <section id="videos" className="mb-12">
          <Typography variant="h4" className="font-bold mb-6 text-center">Latest Videos</Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((video) => (
              <Grid item xs={12} sm={6} md={4} key={video}>
                <Card className="shadow-lg">
                  <CardMedia
                    component="img"
                    height="140"
                    image={`/path/to/video-thumbnail${video}.jpg`}
                    alt={`Video ${video}`}
                  />
                  <CardContent>
                    <Typography variant="h6">Video Title {video}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>

        <section id="blogs" className="mb-12">
          <Typography variant="h4" className="font-bold mb-6 text-center">Latest Blog Posts</Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog}>
                <Card className="shadow-lg">
                  <CardContent>
                    <Typography variant="h6">Blog Post Title {blog}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>

        <section id="about" className="mb-12 text-center">
          <Typography variant="h4" className="font-bold mb-4">About Us</Typography>
          <Typography variant="body1" className="max-w-md mx-auto">
            Code With MCB is dedicated to providing high-quality coding tutorials and tech insights to help developers grow.
          </Typography>
        </section>

        <section id="contact" className="text-center">
          <Typography variant="h4" className="font-bold mb-4">Contact Us</Typography>
          <Typography variant="body1">Email: support@codewithmcb.com</Typography>
          <Typography variant="body1">Follow us on social media for updates!</Typography>
        </section>
      </Container>

      <footer className="bg-blue-600 text-white text-center py-4">
        <Typography variant="body2">&copy; 2025 Code With MCB. All rights reserved.</Typography>
      </footer>
    </div>
  );
}

export default App;
