
import { Button, ButtonGroup} from '@material-ui/core';
import React from 'react';

export const Navigation = () => {
    return(
        <div>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
  <Button>HOME</Button>
  <Button>GitHub</Button>
  <Button>CMD</Button>
</ButtonGroup>



    
        </div>
    );
}