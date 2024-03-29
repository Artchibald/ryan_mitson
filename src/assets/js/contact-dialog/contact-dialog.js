import React from 'react';
import './contact-dialog.scss';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    document.body.classList.add('modal_open');
  };

  const handleClose = () => {
    setOpen(false);
    document.body.classList.remove('modal_open');
  };

  return (
    <React.Fragment>
      <Button className="btn_2" onClick={handleClickOpen}>
        Hit me up!
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Fade timeout={1000} in={open} out={handleClose}>
          <div className="flex_container">
            <div className="flex_child">
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <div className="container">
                <form
                  target="_blank"
                  action="https://formsubmit.co/ryanmitsondesign@gmail.com"
                  method="POST"
                >
                  {/*next page*/}
                  <input
                    type="hidden"
                    name="_next"
                    value="http://ryanmitson.com/"
                  />
                  {/*remove captcha*/}
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Your Message"
                      className="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg btn-dark btn-block"
                  >
                    Submit Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Fade>
      </Dialog>
    </React.Fragment>
  );
}
