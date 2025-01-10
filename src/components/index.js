import { Input, Box } from "@chakra-ui/react";

export const PageWrapper = ({ children, ...rest }) => (
  <Box w="100%" overflowX="hidden" overflowY="auto" p=".7rem" {...rest}>
    {children}
  </Box>
);

export const ThemeInput = ({ ...rest }) => (
  <Input size="md" fontSize="md" focusBorderColor="primary.100" {...rest} />
);

export const EyeIcon = ({ visible, setVisible, size = "1.5rem", ...rest }) => {
  return (
    <Icon
      name={visible ? "FaEye" : "FaEyeSlash"}
      type="fa"
      size={size}
      onClick={() => setVisible(!visible)}
      {...rest}
    />
  );
};

export const ColorMode = ({
  children = null,
  bgLight = null,
  bgDark = null,
  colorLight = null,
  colorDark = null,
  borderColorLight = null,
  borderColorDark = null,
  border = "1px",
  ...rest
}) => {
  const colorProps = {
    ...(bgLight && bgDark ? { bg: colorModeValue(bgLight, bgDark) } : {}),
    ...(colorLight && colorDark
      ? { color: colorModeValue(colorLight, colorDark) }
      : {}),
    ...(borderColorLight && borderColorDark
      ? {
          border,
          borderColor: colorModeValue(borderColorLight, borderColorDark),
        }
      : {}),
  };
  return (
    <Box {...colorProps} {...rest}>
      {children}
    </Box>
  );
};

export const Icon = ({
  name = null,
  type = "md",
  size = "1.5rem",
  ...rest
}) => {
  const iconModule =
    type === "fa"
      ? require(`react-icons/fa`)
      : type === "ai"
      ? require(`react-icons/ai`)
      : type === "bs"
      ? require(`react-icons/bs`)
      : type === "bi"
      ? require(`react-icons/bi`)
      : type === "ci"
      ? require(`react-icons/ci`)
      : type === "cg"
      ? require(`react-icons/cg`)
      : type === "di"
      ? require(`react-icons/di`)
      : type === "fi"
      ? require(`react-icons/fi`)
      : type === "fc"
      ? require(`react-icons/fc`)
      : type === "fa"
      ? require(`react-icons/fa`)
      : type === "fa6"
      ? require(`react-icons/fa6`)
      : type === "gi"
      ? require(`react-icons/gi`)
      : type === "go"
      ? require(`react-icons/go`)
      : type === "gr"
      ? require(`react-icons/gr`)
      : type === "hi"
      ? require(`react-icons/hi`)
      : type === "hi2"
      ? require(`react-icons/hi2`)
      : type === "im"
      ? require(`react-icons/im`)
      : type === "lia"
      ? require(`react-icons/lia`)
      : type === "io"
      ? require(`react-icons/io`)
      : type === "io5"
      ? require(`react-icons/io5`)
      : type === "lu"
      ? require(`react-icons/lu`)
      : type === "lu"
      ? require(`react-icons/lu`)
      : type === "md"
      ? require(`react-icons/md`)
      : type === "pi"
      ? require(`react-icons/pi`)
      : type === "rx"
      ? require(`react-icons/rx`)
      : type === "ri"
      ? require(`react-icons/ri`)
      : type === "si"
      ? require(`react-icons/si`)
      : type === "sl"
      ? require(`react-icons/sl`)
      : type === "tb"
      ? require(`react-icons/tb`)
      : type === "tfi"
      ? require(`react-icons/tfi`)
      : type === "ti"
      ? require(`react-icons/ti`)
      : type === "ti"
      ? require(`react-icons/ti`)
      : type === "vsc"
      ? require(`react-icons/vsc`)
      : type === "wi"
      ? require(`react-icons/wi`)
      : null;

  return name ? (
    <ColorMode as={iconModule[name]} size={size} {...rest} />
  ) : null;
};
