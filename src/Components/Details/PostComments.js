import React from "react";
import { withStyles } from "@material-ui/core/styles";
import user1 from "../../Files/Images/users/1.png";
import { ProductConsumer } from "../../Context";
import { Comments } from "../../Data/comments";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { Box, Typography, Avatar, Button, TextField } from "@material-ui/core";

const styles = theme => ({
  root: {
    background: theme.palette.grey[50],
    padding: theme.spacing(1, 2),
    border: `2px solid ${theme.palette.grey[300]}`,
    borderRadius: 4
  },
  marginBt: {
    marginBottom: theme.spacing(1.5),
    border: `2px solid ${theme.palette.grey[300]}`,
    "&:last-child": {
      marginBottom: 0
    }
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
});

export const ColorButtonNormal = withStyles(theme => ({
  root: {
    background: theme.palette.error.dark,
    color: theme.palette.common.white,
    textTransform: "none",
    "&:hover": {
      background: theme.palette.error.dark,
      color: theme.palette.common.white
    }
  }
}))(Button);

class CommentForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let user = this._user;
    let content = this._content;
    this.props.addComment(user.value, content.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          placeholder="Enter your name"
          required
          inputRef={input => (this._user = input)}
        />
        <Box mt={2}>
          <TextField
            size="small"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            placeholder="Write a comment..."
            required
            inputRef={textarea => (this._content = textarea)}
          />
        </Box>
        <Box mt={1}>
          <ColorButtonNormal type="submit" endIcon={<SendOutlinedIcon />}>
            Submit
          </ColorButtonNormal>
        </Box>
      </form>
    );
  }
}

class PostComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      showComments: true,
      comments: Comments
    };
  }
  addComment(user, content) {
    const comment = {
      id: this.state.comments.length + 1,
      user,
      content
    };

    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
  }
  getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.root}>
        <ProductConsumer>
          {value => {
            const { title } = value.detailProduct;
            return (
              <React.Fragment>
                <Box mb={2}>
                  <Typography variant="h6">
                    <b>
                      Comments about {title} -{" "}
                      {this.getCommentsTitle(this.state.comments.length)}
                    </b>{" "}
                  </Typography>
                </Box>
                <CommentForm addComment={this.addComment.bind(this)} />
                <Box mt={2}>
                  {this.state.comments.map(comment => (
                    <Box
                      className={classes.marginBt}
                      bgcolor="#fff"
                      alignItems="center"
                      p={1}
                      borderRadius="0 20px"
                      display="flex"
                      key={comment.id}
                    >
                      <Avatar
                        src={user1}
                        alt="image1"
                        className={classes.avatar}
                      />
                      <Box ml={2}>
                        <Typography style={{ marginBottom: 4 }}>
                          <b>{comment.user}</b>
                        </Typography>
                        <Typography>{comment.content}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </React.Fragment>
            );
          }}
        </ProductConsumer>
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PostComponents);
