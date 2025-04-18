import { Article } from "@/types/response.type";
import { Button, Spin, Table, Tooltip, Input, Tag } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router";
import MyPagination from "@/components/MyPagination/MyPagination";
import useMessage from "@/hooks/useMessage";
import { getAllArticles } from "@/services/article.service";
const { Search } = Input;
interface ArticleTableItem {
  key: number;
  stt: number;
  title: string;
  thumbnail: string;
  createdAt: Date;
  active: boolean;
  action: number;
}
export default function ArticleManagement() {
  const [dataSource, setDataSource] = useState<ArticleTableItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalItem, setTotalItem] = useState(0);
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const limit = +(searchParams.get("limit") || 10);
  const message = useMessage();
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await getAllArticles(page, limit);
        setTotalItem(res.totalItem);
        setArticleData(res.result);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [page, limit]);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      width: 500,
    },
    {
      title: "Hình ảnh",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (image: string) => (
        <img src={image} alt="icon" width={100} height={100} />
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Trạng thái",
      dataIndex: "active",
      key: "active",
      render: (active: Boolean) => (
        <Tag
          className="text-[14px] font-[500]"
          color={active === true ? "green" : "red"}
        >
          {active === true ? "Đang hoạt động" : "Ngưng hoạt động"}
        </Tag>
      ),
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: ArticleTableItem) => (
        <>
          <Tooltip title="Cập nhật" className="mr-[10px]">
            <Link to={`update/${record.key}`}>
              <Button type="primary" ghost icon={<EditOutlined />}></Button>
            </Link>
          </Tooltip>
        </>
      ),
    },
  ];

  const setArticleData = (data: Article[]) => {
    setDataSource(
      data.map((item, index) => {
        return {
          key: item.id,
          stt: (page - 1) * limit + index + 1,
          title: item.title,
          thumbnail: item.thumbnail,
          createdAt: item.createdAt,
          active: item.active,
          action: item.id,
        };
      })
    );
  };
  return (
    <div>
      {message.contextHolder}
      <div className="flex justify-between items-center mb-[30px]">
        <div>
          <Search
            placeholder="Tìm kiếm theo tên..."
            allowClear
            // onSearch={searchByName}
            style={{
              width: 300,
              marginRight: "40px",
            }}
          />
        </div>
        <div>
          <Tooltip title="Thêm mới">
            <Link to={"add"}>
              <Button type="primary" ghost icon={<PlusOutlined />}>
                Thêm mới
              </Button>
            </Link>
          </Tooltip>
        </div>
      </div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
        >
          <Spin tip="Loading..." size="large" />
        </div>
      ) : (
        <>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            style={{ fontSize: "16px" }}
            className="mb-5"
          />
          <MyPagination current={page} pageSize={limit} total={totalItem} />
        </>
      )}
    </div>
  );
}
