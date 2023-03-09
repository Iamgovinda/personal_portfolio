import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./BlogList.module.scss";
import { get, remove } from "../../API/axios";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useNavigate } from "react-router-dom";
import ViewBlog from "./ViewBlog";
import { toast } from "react-toastify";
import { Icon, Tooltip } from "@mui/material";
import AreYouSure from "../Modal/AreYouSureModal";
import { IconButton } from "@mui/material";
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const BlogList = () => {
    const [blogData, setBlogData] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [viewData, setViewData] = React.useState([]);
    const [blog, setBlog] = React.useState([]);
    const [delModalOpen, setDelModalOpen] = React.useState(false);

    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        if (isLoading) {
            get("/blog").then((response) => {

                if (response.status === 200) {
                    setBlogData(response.data?.results);
                    setIsLoading(false);
                }
            }

            );

        }
    }, [isLoading]);
    const navigate = useNavigate();
    const handleClick = (row) => {
        setOpen(true);
        setViewData(JSON.parse(row.content));
        setBlog(row);

    }
    const handleDelete = (row) => {
        remove(`/blog/${row.uuid}/`).then((response) => {
            if (response.status === 204) {
                toast.success("Blog Removed");
                setIsLoading(!isLoading);
                setDelModalOpen(false);
            }
        })
    }
    const handleClickOpen = (row) => {
        setDelModalOpen(true);
        setBlog(row);
    };

    return (
        <>
            {
                (blogData && blogData.length > 0) ? (
                    <>
                        <TableContainer component={Paper} className={styles["table-main"]}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead sx={{ backgroundColor: "gray" }}>
                                    <TableRow>
                                        <TableCell className={styles["table-header"]}>SN</TableCell>
                                        <TableCell className={styles["table-header"]}>Title</TableCell>
                                        <TableCell className={styles["table-header"]}>
                                            WrittenBy
                                        </TableCell>
                                        <TableCell className={styles["table-header"]}>Status</TableCell>
                                        <TableCell className={styles["table-header"]}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {blogData &&
                                        blogData?.map((row, index) => (

                                            <TableRow
                                                key={index}
                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                            >
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    className={styles["table-content"]}
                                                >
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell className={styles["table-content"]}>
                                                    {row.title}
                                                </TableCell>
                                                <TableCell className={styles["table-content"]}>
                                                    {row.written_by}
                                                </TableCell>
                                                <TableCell className={styles["table-content"]}>
                                                    {row.content === null ? "Not Uploaded" : "Uploaded"}
                                                </TableCell>

                                                <TableCell className={styles["table-content"]}>
                                                    {row.content === null ? (
                                                        <>
                                                            <Tooltip title="Upload Blog">
                                                                <IconButton>
                                                                    <AddCircleOutlineIcon
                                                                        fontSize="medium"
                                                                        style={{ marginRight: "3px", cursor: "pointer" }}
                                                                        onClick={() => navigate(`add-new-blog/${row.uuid}`)}
                                                                        htmlColor="green"
                                                                    />
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Tooltip title="Delete">
                                                                <IconButton>
                                                                    <DeleteOutlinedIcon
                                                                        fontSize="medium"
                                                                        style={{ marginRight: "3px", cursor: "pointer" }}
                                                                        htmlColor="red"
                                                                        onClick={() => handleClickOpen(row)}

                                                                    />
                                                                </IconButton>
                                                            </Tooltip>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Tooltip title="View Blog">
                                                                <IconButton>
                                                                    <RemoveRedEyeOutlinedIcon
                                                                        fontSize="medium"
                                                                        style={{ marginRight: "3px", cursor: "pointer" }}
                                                                        onClick={() => handleClick(row)}
                                                                        htmlColor="blue"
                                                                    />{" "}
                                                                </IconButton>
                                                            </Tooltip>

                                                            <Tooltip title="OK" className="l">
                                                                <IconButton>
                                                                    <BorderColorOutlinedIcon
                                                                        fontSize="medium"
                                                                        style={{ marginRight: "3px", cursor: "pointer" }}
                                                                        onClick={() => navigate(`edit-blog/${row.uuid}`)}
                                                                        htmlColor="green"
                                                                    />{" "}
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Tooltip title="Delete">
                                                                <IconButton>
                                                                    <DeleteOutlinedIcon
                                                                        fontSize="medium"
                                                                        style={{ marginRight: "3px", cursor: "pointer" }}
                                                                        htmlColor="red"
                                                                        onClick={() => handleClickOpen(row)}

                                                                    />
                                                                </IconButton>
                                                            </Tooltip>
                                                        </>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </>
                ) : (
                    <>
                    </>
                )
            }            {
                (viewData && blogData) && <ViewBlog data={viewData} open={open} setOpen={setOpen} blog={blog} />
            }
            {
                (delModalOpen) && <AreYouSure open={delModalOpen} setOpen={setDelModalOpen} blog={blog} handleDelete={handleDelete} />
            }

        </>
    );
};
export default BlogList;
