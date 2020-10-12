import React from 'react';
import './SignIn.scss';

import { makeStyles } from '@material-ui/core/styles';

import firebase from 'firebase/app';

import  Button from '@material-ui/core/Button';

const SignIn = function() {

  const useStyles = makeStyles({
    root: {
      backgroundColor: 'white',
      color: 'green',
    },
    label: {
      textTransform: 'none',
    }
  });
  const classes = useStyles();

  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
  }


  return(
    <div>
      <Button onClick={SignInWithGoogle} classes={{ 
        root: classes.root,
        label: classes.label,
       }}>
        Sign In
      </Button>
    </div>
  );
}

export default SignIn;