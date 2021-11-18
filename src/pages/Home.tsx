import { Grid, IconButton, Paper } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
export const Home = () => {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <ul>
            <li>
              <IconButton color="primary">
                <TwitterIcon />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <NotificationIcon />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <MailOutlineIcon />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <BookmarkBorderOutlinedIcon />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <ListAltOutlinedIcon />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <PermIdentityOutlinedIcon />
              </IconButton>
            </li>
          </ul>
        </Grid>
        <Grid item xs={7}>
          <Paper>123</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>123</Paper>
        </Grid>
      </Grid>
    </section>
  );
};
