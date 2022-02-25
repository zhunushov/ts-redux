import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../hooks/useActions";


interface  PropsItem {
    item: any
}
const CardUser: FC<PropsItem> = ({item}) => {
    const navigate = useNavigate()
    const { deleteUser, getUsers } = useAction()
    const handleDelete = async () => {
       await deleteUser(item.id)
       getUsers()
    }
    return (
        <Box sx={{ maxWidth: 275, margin: 20 }}>
         <Card variant="outlined">
         <CardContent>
         <Typography gutterBottom>
             {item.name}
         </Typography>
        <Typography variant="h5" component="div">
            {item.phone}
       </Typography>
          <Typography variant="body2">
              {item.lastName}
         </Typography>
         </CardContent>
         <CardActions>
         <Button onClick={handleDelete}>delete</Button>
       <Button onClick={() => navigate(`edit/${item.id}`)} >edit</Button>
         </CardActions>
      </Card> 
    </Box>
    );
};

export default CardUser;