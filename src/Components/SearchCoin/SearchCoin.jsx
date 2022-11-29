import { Box, TextField, Typography } from "@mui/material";
import { useStyle } from "./SearchCoin.style";
import Rtl from "../../Theme/Rtl";
import { useDispatch } from "react-redux";
import { getInputValueAction } from "../../Redux/slices/text_field_value_slice";

const SearchCoin = () => {
  //  get css style
  const classes = useStyle();
  // handel to search coins
  const dispatch = useDispatch();
  const coinSearchHandler = (e) => {
    dispatch(getInputValueAction(e.target.value.toLowerCase().trim()));
  };
  return (
    <Box className={classes.search_coin_wraper}>
      <Typography variant={"h6"} className={"section_title"}>
        قیمت ارز های دیجیتال بر اساس ارزش بازار
      </Typography>
      <Box
        component={"form"}
        onSubmit={(e) => e.preventDefault()}
        className={"form_control"}
      >
        <Rtl>
          <TextField
            className={"inner_coin_item"}
            onChange={(e) => coinSearchHandler(e)}
            id="outlined-basic"
            label="جست و جوی ارز"
            variant="outlined"
            spellCheck={"false"}
          />
        </Rtl>
      </Box>
    </Box>
  );
};

export default SearchCoin;
