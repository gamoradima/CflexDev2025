namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrSimpleCSharpExampleProcessMethodsWrapper

	/// <exclude/>
	public class UsrSimpleCSharpExampleProcessMethodsWrapper : ProcessModel
	{

		public UsrSimpleCSharpExampleProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			string name = Get<string>("RealtyNameParameter");
			DateTime d = new DateTime();
			string result = name + " " + d.ToString();
			Set("ResultFullNameParameter", result);
			
			return true;
		}

		#endregion

	}

	#endregion

}

