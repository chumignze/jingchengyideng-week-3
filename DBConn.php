<?php
	class ConMysql{
		public $serverName;
		public $userName;
		public $password;
		public $DBName;
		public $conn;
		//构造方法
		public function __construct($serverName, $userName, $password, $DBName){
			$this -> serverName = $serverName;
			$this -> userName = $userName;
			$this -> password = $password;
			$this -> DBName = $DBName;
		}
		//建立数据库链接
		public function getConnection(){
			try{
				$dsn = "mysql:host=$this->serverName;dbname=$this->DBName";
				$this -> conn = new PDO($dsn, $this -> userName, $this -> password);
				echo "连接成功！";
			}catch(Exception $ex){
				echo $ex -> getMessage();
			}
		}
		//更新操作
		public function updateData($updSQL){
			if($this -> conn == null){
				$this -> getConnection();
			}
			echo $updSQL;
			$res = $this -> conn -> exec($updSQL);
			$this -> closeConnection();
		}
		//关闭数据库链接
		public function closeConnection(){
			$this -> conn = null;
		}
	}
	class praiseThumbDB extends ConMysql{
		public function __construct($serverName, $userName, $password, $DBName){
			parent::__construct($serverName, $userName, $password, $DBName);
		}
		public function updateThumbData(){
			$updSQL = "update praisethumb set thumbs = thumbs + 1 where id = 1";
			$this -> updateData($updSQL);
		}
	}
	$praiseConn = new praiseThumbDB('localhost', 'root', 'chumz', 'phplesson');
	$praiseConn -> updateThumbData();
?>